import * as firebase from "firebase/app";
import jwt from "jsonwebtoken";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { fail } from "@sveltejs/kit";
import { AppConstants } from "../../lib/server/constants";
const GOOGLE_API_KEY = process.env["GOOGLE_API_KEY"];
const config = {
  apiKey: GOOGLE_API_KEY,
  authDomain: AppConstants.authDomain,
  projectId: AppConstants.projectId,
  storageBucket: AppConstants.storageBucket,
  messagingSenderId: AppConstants.messagingSenderId,
  appId: AppConstants.appId,
  measurementId: AppConstants.measurementId,
};

const app = firebase.initializeApp(config);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    // TODO log the user in
    const fomrdata = await request.formData();
    const email = await fomrdata.get("email");
    const password = await fomrdata.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in with firbase authentication
        const user = userCredential.user;
        const variables = { email: user.email };
        const admin_secret = "pooc@23243300";
        const url = "https://divine-termite-84.hasura.app/v1/graphql";
        const query = `query getUsers($email: String!) {
    profiles(where: { email: { _eq: $email } }) {
      id
      name
      created_at
      email
    }
  }`;
        // fatch from hasura with firbase details
        const response = await fetch(url, {
          method: "post",
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret": admin_secret,
          },
          body: JSON.stringify({
            query: query,
            variables: variables,
          }),
        });

        // const fetchedUser = response.users[0];
        const { data } = await response.json();
        let userArray = data.profiles;

        console.log("fetched http user", userArray, cookies);

        const token = jwt.sign({ userId: userArray[0].id }, "mysecret", {
          expiresIn: "1h",
        });

        cookies.set("session_id", token, {
          path: "/",
          httpOnly: true,
          secure: false,
        });

        console.log("THE COOKIE", cookies);
        return { success: true };
      })
      .catch((error) => {
        // catch all errors
        // const errorCode = error.code;
        // const errorMessage = error.message;
        return fail(error.code, { email, message: error.code });
      });

    return {
      sucess: true,
    };
  },
  register: async ({ request }) => {
    const data = await request.formData();
    const email = await data.get("email");
    const password = await data.get("password");
    // event
    // TODO register the user
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const admin_secret = "pooc@23243300";
        const url = "https://divine-termite-84.hasura.app/v1/graphql";
        const query = `mutation( $email: String) {
        insert_profiles(objects: [{
         email: $email, last_seen: "now()"
        }], on_conflict: {constraint: profiles_pkey, update_columns: [last_seen, email]}
        ) {
          affected_rows
        }
	     }`;
        // console.log(res);
        const variables = { email: res.user.email };

        fetch(url, {
          method: "post",
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret": admin_secret,
          },
          body: JSON.stringify({
            query: query,
            variables: variables,
          }),
        });
        // const { data } = await client.query({
        //   query: REGITER_USER_QUERY,
        //   variables: { email },
        // });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, ":", errorMessage);
      });
  },
};

/** @type {import('./$types').PageServerLoad} */
export async function load({ sessionStorage }) {}

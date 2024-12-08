import { generateToken } from "$lib/jwt";
import { getUser, creatUser } from "../../lib/server/queries";
import { redirect } from "@sveltejs/kit";

import { auth, signInWithEmailAndPassword } from '$lib/firebase';




export async function LOGIN({ cookies, request }) {
  let loading = true;
  const fomrdata = await request.formData();
  const indexEmail = await fomrdata.get("email");
  const appPasswords = await fomrdata.get("password");

  
  const dataBaseDataObject = null;

  // try {

    //fetch user data from firebase
  // const fireUserCredentials =  await signInWithEmailAndPassword(auth, indexEmail, appPasswords)
  signInWithEmailAndPassword(auth, indexEmail, appPasswords).
  then(async (fireUserCredentials) => {
  const  fireUser = await fireUserCredentials.user
  console.log(fireUserCredentials)
  //get user from neon database
  const responseGet = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: getUser,
      variables: {
        google_id: fireUser.uid,
        password: indexPassword
      },
    }),
  });

  if (!responseGet) {
    //create new user
    // throw new Error(`HTTP error! status: ${res.status}`);
    const responseCreate = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: creatUser,
        variables: {
          email: fireUser.email,
          password: appPasswords,
          google_id: fireUser.uid
        },
      }),
    });

    dataBaseDataObject = await responseCreate.json();
  }

  dataBaseDataObject = await res.json();
  const { data } = dataBaseDataObject;
  const { uid, email } = data.getUser;
  // Replace this with actual authentication logic
  const token = generateToken({ uid });
    cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS in production
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    loading = false;
    return redirect(301, '/user')
   }).catch ( (error) => {
    // Error Handling for Firebase and Other Scenarios
    let errorMessage = "An unexpected error occurred.";

    if (error.code === "auth/user-not-found") {
      errorMessage = "No user found with this email.";
    } else if (error.code === "auth/wrong-password") {
      errorMessage = "Incorrect password.";
    } else if (error.code === "auth/invalid-email") {
      errorMessage = "Invalid email format.";
    } else if (error.name === "FetchError") {
      errorMessage = "Unable to connect to the database.";
    }

    console.error("Error during login:", error);
    loading = false;
    return {
      status: 400,
      error: errorMessage,
    };
  })}
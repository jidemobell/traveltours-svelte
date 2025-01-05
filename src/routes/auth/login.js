import { generateToken } from "$lib/jwt";
import { getUser, creatUser } from "../../lib/server/queries";
import {  AppConstants   } from "../../lib/server/constants";
import { redirect } from "@sveltejs/kit";

import { auth, signInWithEmailAndPassword } from "$lib/firebase";

export async function LOGIN({ cookies, request }) {



  let loading = true;
  const formdata = await request.formData();
  const indexEmail = await formdata.get("email");
  const appPasswords = await formdata.get("password");

  const dataBaseDataObject = null;
  signInWithEmailAndPassword(auth, indexEmail, appPasswords)
    .then(async (fireUserCredentials) => {
      const fireUser = await fireUserCredentials.user;
      //get user from neon database
      const responseGet = await fetch(AppConstants.SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: getUser,
          variables: {
            google_id: fireUser.uid,
            password: indexPassword,
          },
        }),
      });

      if (!responseGet) {
        //create new user
        // throw new Error(`HTTP error! status: ${res.status}`);
        const responseCreate = await fetch(AppConstants.SERVER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: creatUser,
            variables: {  
              email: fireUser.email,
              password: appPasswords,
              google_id: fireUser.uid,
            },
          }),
        });

        dataBaseDataObject = await responseCreate.json();
      }

      dataBaseDataObject = await res.json();
      const { data } = dataBaseDataObject;
      const { uuid, email } = data.getUser;
      // Replace this with actual authentication logic
      const token = generateToken({ uuid });
      cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // HTTPS in production
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      loading = false;
      return redirect(301, "/user");
    })
    .catch((error) => {
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
    });
}

export async function customLoginUtility({ cookies, request }) {
  let dataBaseDataObject = null;
  const formdata = await request.formData();
  const formEmail = await formdata.get("email");
  const formPassword = await formdata.get("password");
  // try {
  //check if the user already exist
  const responseGet = await fetch(AppConstants.SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: getUser,
      variables: {
        email: formEmail,
        password: formPassword,
      },
    }),
  })

  if(!responseGet){
     // throw login error
     return {
      status: 400,
      error: "User does not exist",
    };
  }
    
    dataBaseDataObject = await responseGet.json();
     const { data } = dataBaseDataObject;
     const { uuid, email } = data.getUser;
     const token = generateToken({ uuid });

     cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS in production
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    throw redirect(301, "/user");

}


export async function customRegisterUtil({ cookies, request }) {
  try {

    let loading = true;
  const formdata = await request.formData();
  const formEmail = await formdata.get("email");
  const formPassword = await formdata.get("password");

  //check if the user already exist
  const responseCreate = await fetch(AppConstants.SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: creatUser,
      variables: {
        google_id: formEmail,
        password: formPassword,
      },
    }),
  });

  if (responseCreate === 1) {
    //get the user
    const responseGet = await fetch(AppConstants.SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: getUser,
        variables: {
          google_id: formEmail,
          password: formPassword,
        },
      }),
    });

    const { uuid, email } = responseGet;
    // Replace this with actual authentication logic
    const token = generateToken({ uuid });
    cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS in production
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    loading = false;
    return redirect(301, "/user");
  }} catch (error) {
    
  }
}


// export const POST = async ({ request }) => {
//   const { idToken } = await request.json();

//   try {
//       // Verify the Firebase ID token
//       const decodedToken = await getAuth(app).verifyIdToken(idToken);

//       // Create a session or return a JWT for the user
//       const { uid, email, name } = decodedToken;

//       // Optionally, save user details in your database
//       console.log('Authenticated Google User:', { uid, email, name });

//       // Return a session cookie or other response
//       return new Response(JSON.stringify({ message: 'Login successful', user: { email, name } }), {
//           status: 200
//       });
//   } catch (error) {
//       console.error('Firebase token verification failed:', error);
//       return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
//   }
// };
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
  console.log("POST CALLED");
  const data = await request.json();
  let dataBaseDataObject;

  try {
    // Verify the Firebase ID token
    const decodedToken = await getAuth(app).verifyIdToken(idToken);
    // Create a session or return a JWT for the user
    const { uid, email, name } = decodedToken;
    
    // find user in the database
    // get user from neon database
    // create a get user by google id
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
      // create new user in the database
      const responseCreate = await fetch(AppConstants.SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: creatUser,
          variables: {  
            email: email,
            google_id: uid,
            name: name
          },
        }),
      });

      dataBaseDataObject = await responseCreate.json();
    }

    dataBaseDataObject = await responseGet.json();
    const token = generateToken({ uid });

    cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS in production
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // throw redirect(301, "/user");
    return json({ message: 'Token processed successfully' });
  } catch (error) {
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
  }
};

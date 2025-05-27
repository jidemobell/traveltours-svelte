// import { firebaseAdminApp } from "../utils/firebase-admin.js";
// import { getAuth } from "firebase-admin/auth";
// import { getDatabase } from "firebase-admin/database";

// Only initialize Firebase Admin once
// const firebaseAdminApp = initializeApp({
//   credential: cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//   }),
//   databaseURL: `https://jelvintour-default-rtdb.firebaseio.com/`
// });

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const { idToken } = await request.json();
      if (!idToken) {
        return new Response(JSON.stringify({ error: "Missing idToken" }), { status: 400 });
      }

      // 1. Verify ID token using Firebase Auth REST API
      const apiKey = env.FIREBASE_WEB_API_KEY; // Use env variable from wrangler.toml
      const verifyUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`;
      const verifyRes = await fetch(verifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken })
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.users || !verifyData.users[0]) {
        return new Response(JSON.stringify({ error: "Invalid idToken" }), { status: 401 });
      }

      // 2. Extract user info
      const user = verifyData.users[0];
      const { localId: uid, email, displayName: name, photoUrl: picture } = user;

      // 3. Upsert user in Realtime Database using REST API
      const dbUrl = `https://${env.FIREBASE_PROJECT_ID}.firebaseio.com/users/${uid}.json?auth=${idToken}`;
      const dbRes = await fetch(dbUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          picture,
          lastLogin: Date.now()
        })
      });

      if (!dbRes.ok) {
        return new Response(JSON.stringify({ error: "Failed to update user in DB" }), { status: 500 });
      }

      // 4. Create a session token (simple JSON for demo)
      const sessionToken = JSON.stringify({ uid, email });

      // 5. Set cookie and return user info
      return new Response(JSON.stringify({ user: { uid, email, name, picture } }), {
        status: 200,
        headers: {
          "Set-Cookie": `token=${encodeURIComponent(sessionToken)}; Path=/; HttpOnly; Secure; SameSite=Strict`,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 401 });
    }
  }
};
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
  async fetch(request) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const { idToken } = await request.json();
      if (!idToken) {
        return new Response(JSON.stringify({ error: "Missing idToken" }), { status: 400 });
      }

      // Verify ID token using Firebase REST API
      const apiKey = process.env.FIREBASE_WEB_API_KEY;
      const verifyUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`;
      const verifyRes = await fetch(verifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken })
      });
      const verifyData = await verifyRes.json();

      if (!verifyData.users) {
        return new Response(JSON.stringify({ error: "Invalid idToken" }), { status: 401 });
      }

      // Extract user info
      const user = verifyData.users[0];

      // You can now upsert user info to your database via REST as needed

      return new Response(JSON.stringify({ user }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 401 });
    }
  }
};
import { firebaseAdminApp } from "../utils/firebase-admin.js";
import { getAuth } from "firebase-admin/auth";
import { getDatabase } from "firebase-admin/database";

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
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const { idToken } = await request.json();
      if (!idToken) {
        return new Response(JSON.stringify({ error: "Missing idToken" }), { status: 400 });
      }

      // Verify Firebase ID token
      const decoded = await getAuth(firebaseAdminApp).verifyIdToken(idToken);

      // Extract user info
      const { uid, email, name, picture } = decoded;

      // Upsert user in Realtime Database
      const db = getDatabase(firebaseAdminApp);
      const userRef = db.ref(`users/${uid}`);
      await userRef.update({
        email,
        name,
        picture,
        lastLogin: Date.now()
      });

      // Create a session token (JWT or similar)
      // For demo, we'll just use a simple JSON string (replace with JWT in production)
      const sessionToken = JSON.stringify({ uid, email });

      // Set cookie (adjust options as needed)
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
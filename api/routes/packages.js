import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

// Initialize Firebase Admin
const firebaseAdminApp = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: `https://jelvintour-default-rtdb.firebaseio.com/`
});

export async function handlePackages(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  try {
    if (request.method === "GET") {
      const db = getDatabase(firebaseAdminApp);
      const snapshot = await db.ref("packages").once("value");
      const packages = snapshot.val() || [];
      return new Response(JSON.stringify(packages), {
        status: 200,
        headers: corsHeaders,
      });
    }

    return new Response("Not found", { status: 404, headers: corsHeaders });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error", details: err.message }),
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
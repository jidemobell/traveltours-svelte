import { Pool } from "@neondatabase/serverless";

export async function handlePackages(request) {
  // Optional: Only needed if you expect cross-origin browser requests
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  const pool = new Pool({
    connectionString: "postgresql://traveltours_owner:BaZU9hmKqH8k@ep-cold-base-a53m37xe.us-east-2.aws.neon.tech/traveltours?sslmode=require",
  });

  try {
    if (request.method === "GET") {
      const { rows } = await pool.query("SELECT * FROM packages");
      return new Response(JSON.stringify(rows), {
        status: 200,
        headers: corsHeaders, // Remove if not needed for CORS
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
  } finally {
    await pool.end();
  }
}
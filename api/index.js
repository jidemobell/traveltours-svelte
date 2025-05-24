import { handlePackages } from './routes/packages';
import authHandler from './routes/auth';


export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Handle preflight OPTIONS requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow all origins (replace '*' with your frontend domain in production)
          "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS", // Allowed methods
           "Access-Control-Allow-Headers": "x-admin-token, Content-Type",
          // "Access-Control-Allow-Headers": "Content-Type", 
        },
      });
    }

     // Route: /api/appointments/*
    if (url.pathname.startsWith("/api/packages")) {
      return handlePackages(request);
    }

     // Route: /api/auth
    if (url.pathname.startsWith("/api/auth")) {
      return authHandler.fetch(request);
    }

    // Default: 404 Not Found
    return new Response("Not Found", { status: 404 });
  },
};



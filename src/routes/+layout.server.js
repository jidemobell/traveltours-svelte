import jwt from 'jsonwebtoken';
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies }) {
  const token = cookies.get("token");

  // Allow landing and auth pages for everyone
  const isPublic = url.pathname === '/' || url.pathname.startsWith('/auth');

  if (!token) {
    if (!isPublic) throw redirect(303, '/');
    return { user: null };
  }

  try {
    // Verify JWT (replace with your real secret)
    const decoded = jwt.verify(token, 'your-secret-key');
    // If user is logged in and tries to access /auth, redirect to /user or home
    if (url.pathname.startsWith('/auth')) {
      throw redirect(303, '/user');
    }
    return { user: decoded };
  } catch {
    // Invalid token, treat as not logged in
    if (!isPublic) throw redirect(303, '/');
    return { user: null };
  }
}


import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies }) {
  // Read user info from the "token" cookie (set by your API after login)
  const token = cookies.get("token"); // <-- changed from "user" to "token"

  // Allow landing and auth pages for everyone
  const isPublic = url.pathname === '/' || url.pathname.startsWith('/auth');

  if (!token) {
    if (!isPublic) throw redirect(303, '/');
    return { user: null };
  }

  try {
    const user = JSON.parse(decodeURIComponent(token));
    if (url.pathname.startsWith('/auth')) {
      throw redirect(303, '/user');
    }
    return { user };
  } catch {
    if (!isPublic) throw redirect(303, '/');
    return { user: null };
  }
}


import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies }) {
  // Read user info from a cookie (set by your API after login)
  const userCookie = cookies.get("user"); // e.g., a JSON string

  // Allow landing and auth pages for everyone
  const isPublic = url.pathname === '/' || url.pathname.startsWith('/auth');

  if (!userCookie) {
    if (!isPublic) throw redirect(303, '/');
    return { user: null };
  }

  try {
    const user = JSON.parse(userCookie);
    if (url.pathname.startsWith('/auth')) {
      throw redirect(303, '/user');
    }
    return { user };
  } catch {
    if (!isPublic) throw redirect(303, '/');
    return { user: null };
  }
}


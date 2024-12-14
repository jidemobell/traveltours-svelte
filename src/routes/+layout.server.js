import jwt from 'jsonwebtoken';
import "dotenv/config";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies, locals }) {
  const token = cookies.get("token");
  if(!token){
    if(url.pathname !== '/' && url.pathname !== '/auth' ) throw redirect(303, '/')
    return { user: null }
  }

  if (token && url.pathname === '/auth') {
    throw redirect(303, '/user');
  }

  try {
    //verify jwt
    const decoded = jwt.verify(token, 'your-secret-key' )
    return { user: decoded}
  }catch {
    //invalid token
    if (url.pathname !== '/') {
      throw redirect(303, '/');
    }
    return { user: null };
  }
}



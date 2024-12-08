import jwt from 'jsonwebtoken';
import "dotenv/config";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ url, cookies, locals }) {
  const token = cookies.get("token");

  if(!token){
    // throw redirect(303, '/')
    if(url.pathname !== '/') throw redirect(303, '/');
    return { user: null }
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



import { browser } from '$app/environment';
import { fail, redirect } from "@sveltejs/kit";

const unProtectedRoutes = ['/', '/login', '/logout'];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve , request}) {
  console.log("hook handler loaded first")
	const sessionId =  event.cookies.get('session_id');

  if(!browser){
    // console.log("data", localStorage.getItem("testing"))
    console.log("cookies at hook", event.cookies.getAll());
  }
  console.log("cookies at hook", event.cookies.getAll());
  console.log('session_id: ' + sessionId);
  if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
    throw redirect(303, '/');
  }

  
  // console.log(localStorage.getItem("testing"))
 //get user with auth Token
 event.locals.user = {email: "folamob@gmail.com"}
 const query = event.url.searchParams.get('logout');
 if (Boolean(query) == true) {
      event.cookies.delete('session_id', { path: '/' });
 }
	return resolve(event);
}
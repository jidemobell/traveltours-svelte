import { browser } from '$app/environment';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
	console.log("layout server loaded first")

	if(!browser){
    // console.log("data", localStorage.getItem("testing"))
    console.log("cookies at hook", cookies.getAll());
  }
}
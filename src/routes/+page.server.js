import { AppConstants } from '../lib/server/constants';
import { allPackages } from '../lib/server/queries';

// const GOOGLE_API_KEY = process.env["GOOGLE_API_KEY"];
// console.log("GOOGLE_API_KEY", GOOGLE_API_KEY)

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const response = await fetch(AppConstants.SERVER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: allPackages,
    }),
  })
  const packages = await response.json();
  const { data} = packages
  return {
		packages: data.AllPackages
	};
}
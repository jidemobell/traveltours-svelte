import { AppConstants } from '../lib/server/constants';
import { allPackages } from '../lib/server/queries';



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
  // console.log(data.AllPackages)
  return {
		packages: data.AllPackages
	};
}
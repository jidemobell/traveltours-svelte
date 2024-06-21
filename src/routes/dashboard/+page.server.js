/** @type {import('./$types').PageServerLoad} */
export function load(event) {
  console.log("server actions loaded first")
}

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	logout: async (event) => {
// 		event.cookies.delete('session_id', { path: '/' });
// 		event.locals.user = null;
// 	}
// };
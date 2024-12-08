
// /** @type {import('./$types').LayoutServerLoad} */
// export async function load({ cookies }) {
//   const session = cookies.get('session_id');
//   // if (!session) {
//   //   redirect(307, "/");
//   // }
//   console.log("dashboard server", session)
//   return {
//     session
//   };
// }

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	return {
		user: event.locals.user
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async (event) => {
		event.cookies.delete('token', { path: '/' });
		event.locals.user = null;
	}
};
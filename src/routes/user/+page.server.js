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
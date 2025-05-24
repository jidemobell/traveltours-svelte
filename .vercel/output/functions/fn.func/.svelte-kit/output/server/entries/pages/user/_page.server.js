async function load(event) {
  return {
    user: event.locals.user
  };
}
const actions = {
  logout: async (event) => {
    event.cookies.delete("token", { path: "/" });
    event.locals.user = null;
  }
};
export {
  actions,
  load
};

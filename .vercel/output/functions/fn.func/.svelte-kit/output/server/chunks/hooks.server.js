import jwt from "jsonwebtoken";
async function handle({ event, resolve }) {
  const token = event.cookies.get("token");
  if (token) {
    try {
      const user = jwt.verify(token, "your-secret-key");
      event.locals.user = user;
    } catch (err) {
      event.cookies.delete("token");
    }
  }
  return resolve(event);
}
export {
  handle
};

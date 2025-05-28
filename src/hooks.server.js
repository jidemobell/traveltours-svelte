//Use hooks to share the decoded JWT across the app.

export async function handle({ event, resolve }) {
  // Example: read user info from a cookie (if you store it as JSON)
  // const userCookie = event.cookies.get("user");
  const token = event.cookies.get("token");
   if (token) {
    // Optionally decode/verify token here if needed
    event.locals.user = JSON.parse(decodeURIComponent(token));
  }
  return resolve(event);
}

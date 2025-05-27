//Use hooks to share the decoded JWT across the app.

export async function handle({ event, resolve }) {
  // Example: read user info from a cookie (if you store it as JSON)
  const userCookie = event.cookies.get("user");
  if (userCookie) {
    try {
      event.locals.user = JSON.parse(userCookie);
    } catch {
      event.cookies.delete("user");
    }
  }
  return resolve(event);
}

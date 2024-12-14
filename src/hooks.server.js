//Use hooks to share the decoded JWT across the app.
import jwt from 'jsonwebtoken';

export async function handle({ event, resolve }) {
  const token = event.cookies.get("token");
  if (token) {
    try {
      const user = jwt.verify(token, 'your-secret-key' )
      event.locals.user = user;
    }catch (err) {
      event.cookies.delete("token")
    }
  }
  return resolve(event);
}

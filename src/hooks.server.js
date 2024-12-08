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

  // Add COOP and COEP headers to all responses
  // response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  // response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');

  return resolve(event);
}

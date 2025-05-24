1. Should Google Auth work with the database?
Yes.

When a user logs in with Google, you should check if they exist in your database.
If they don’t exist, create a new user record (signup).
If they do exist, just log them in.
2. Should it be "Sign up with Google" or "Login with Google"?
You only need one button:

"Login with Google" (or "Continue with Google") is enough.
The backend should handle both signup (first time) and login (returning user) automatically.
3. Should the frontend call your /api/auth endpoint?
Yes.

The frontend should start the Google Auth flow (redirect or popup).
After Google returns a token, send it to your /api/auth endpoint.
Your backend should verify the token, create or fetch the user in your database, and return a session/JWT/cookie.
Typical Flow:
Frontend: User clicks "Login with Google".
Frontend: Redirects to Google, user authenticates.
Frontend: Receives Google token, sends it to /api/auth.
Backend (/api/auth):
Verifies Google token.
Checks if user exists in DB; creates if not.
Returns session/JWT/cookie.
Frontend: Stores session/cookie and user is logged in.
Summary:

Use one button for both login and signup.
Always check/add user in your DB after Google login.
Frontend should call your /api/auth endpoint with the Google token.
Let me know if you want a sample /api/auth handler!
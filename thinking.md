Your thinking is correct and matches best practices for modern travel/booking apps:

Recommended Approach
Landing page (/):

Always accessible, shows packages/destinations.
If user is logged in, personalize with their data (bookings, saved packages, etc.).
If not logged in, show generic content and prompt to log in for bookings/saving.
Login flow:

After login, redirect back to the landing page (/).
The page now shows personalized content (e.g., "Welcome, [name]!", "Your bookings", etc.).
Use a profile dropdown (like Booking.com) for user-specific actions (profile, bookings, logout).
No need for a separate /user dashboard page unless you want a dedicated user area.

All user actions can be handled via modals, dropdowns, or sections on the main page.
How to Implement in SvelteKit
After login, redirect to / (not /user).
In your root layout or landing page, check for user data (from cookie/session) and show personalized content if present.
Profile dropdown:
Add a dropdown in your header or nav that appears when user is present.
Include links to "My Bookings", "Profile", "Logout", etc.

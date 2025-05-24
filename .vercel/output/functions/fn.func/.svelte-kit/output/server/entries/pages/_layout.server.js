import jwt from "jsonwebtoken";
import { r as redirect } from "../../chunks/index.js";
async function load({ url, cookies }) {
  const token = cookies.get("token");
  const isPublic = url.pathname === "/" || url.pathname.startsWith("/auth");
  if (!token) {
    if (!isPublic) throw redirect(303, "/");
    return { user: null };
  }
  try {
    const decoded = jwt.verify(token, "your-secret-key");
    if (url.pathname.startsWith("/auth")) {
      throw redirect(303, "/user");
    }
    return { user: decoded };
  } catch {
    if (!isPublic) throw redirect(303, "/");
    return { user: null };
  }
}
export {
  load
};

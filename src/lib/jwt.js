import jwt from 'jsonwebtoken';

// Secret key for signing tokens (store this in an environment variable)
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

// Generate a JWT
export function generateToken(payload, expiresIn = '7d') {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify a JWT
export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null; // Token is invalid or expired
  }
}

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // Burada { id, email, name } gibi bir obje olmalı
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
};

// Verify JWT middleware with JWL library
// ! NOT FULLY IMPLEMENTED
import jwt from "jsonwebtoken";
import { config } from "./../../../config";

export const verifyJwt = (req: any, res: any, next: any) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

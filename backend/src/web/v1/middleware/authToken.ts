import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../../config';

interface AuthRequest extends Request {
  user?: any; // Puedes definir una interfaz más específica para el usuario aquí
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Suponiendo que el token está en el formato "Bearer TOKEN"
console.log(token)
  if (!token) {
    res.status(401).json({ error: 'Access denied.' });
    return;
  }

  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid token.' });
      return;
    }
    req.user = user; // Guarda el usuario en el objeto req para su uso en los handlers
    next(); // Llama a next() para continuar con el siguiente middleware o handler
  });
};

import { Router } from 'express';
import { getAllUsersHandler, getUserByIdHandler, createUserHandler, updateUserHandler, deleteUserHandler } from '../../handlers/userHandler';
import { authenticateToken } from '../../middleware/authToken';

const userRouter = Router();

// Rutas que no requieren autenticación
userRouter.get('/', getAllUsersHandler);
userRouter.get('/:id', getUserByIdHandler);

// Rutas que requieren autenticación
userRouter.post('/', authenticateToken, createUserHandler);
userRouter.put('/:id', authenticateToken, updateUserHandler);
userRouter.delete('/:id', authenticateToken, deleteUserHandler);

export default userRouter;
import { Router } from 'express';
import { createClassHandler, getAllClassesHandler, getClassByIdHandler, updateClassHandler, deleteClassHandler } from '../../handlers/classHandler';
import { authenticateToken } from '../../middleware/authToken';


const classRouter = Router();

// Rutas que requieren autenticación
classRouter.post('/', authenticateToken, createClassHandler);
classRouter.put('/:id', authenticateToken, updateClassHandler);
classRouter.delete('/:id', authenticateToken, deleteClassHandler);

// Rutas que no requieren autenticación
classRouter.get('/', getAllClassesHandler);
classRouter.get('/:id', getClassByIdHandler);

export default classRouter;

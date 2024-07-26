import { Router } from 'express';
import { createReservationHandler, getAllReservationsHandler, getReservationByIdHandler, updateReservationHandler, deleteReservationHandler } from '../../handlers/reservationHandler';
import { authenticateToken } from '../../middleware/authToken';

const reservationRouter = Router();

reservationRouter.get('/', authenticateToken, getAllReservationsHandler);
reservationRouter.get('/:id', authenticateToken, getReservationByIdHandler);
reservationRouter.post('/', authenticateToken, createReservationHandler);
reservationRouter.put('/:id', authenticateToken, updateReservationHandler);
reservationRouter.delete('/:id', authenticateToken, deleteReservationHandler);

export default reservationRouter;

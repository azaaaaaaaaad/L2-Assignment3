import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidations } from './user.validation';

const UserRoutes = express.Router();

UserRoutes.post(
  '/register',
  validateRequest(userValidations.userValidationSchema),
  UserControllers.createUser,
);

export default UserRoutes;

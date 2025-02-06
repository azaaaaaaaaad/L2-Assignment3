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

UserRoutes.post(
  '/login',
  validateRequest(userValidations.loginValidationSchema),
  UserControllers.loginUser,
);



export default UserRoutes;

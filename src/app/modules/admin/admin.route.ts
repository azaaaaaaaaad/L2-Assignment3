import express from 'express';
import { AdminControllers } from './admin.controller';

const AdminRoutes = express.Router();



AdminRoutes.patch('/users/:userId/block', AdminControllers.blockUser)

export default AdminRoutes;

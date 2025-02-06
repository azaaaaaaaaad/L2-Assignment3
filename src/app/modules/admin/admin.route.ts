import express from 'express';
import { AdminControllers } from './admin.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.contstant';

const AdminRoutes = express.Router();



AdminRoutes.patch('/users/:userId/block', auth(USER_ROLE.admin), AdminControllers.adminBlockUser)

AdminRoutes.delete('/blogs/:id', auth(USER_ROLE.admin), AdminControllers.adminDeleteBlog)

export default AdminRoutes;

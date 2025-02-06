import AdminRoutes from '../modules/admin/admin.route';
import BlogRoutes from '../modules/blog/blog.route';
import UserRoutes from '../modules/user/user.route';
import express from 'express';

const router = express.Router();

const moduleRoutes = [
  //change the path and routes
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/admin',
    route: AdminRoutes
  }
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;

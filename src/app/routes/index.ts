import { Router } from "express";
const router = Router();

const moduleRoutes = [
  //change the path and routes
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;

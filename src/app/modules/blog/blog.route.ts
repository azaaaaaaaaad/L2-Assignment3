import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.contstant';
const BlogRoutes = express.Router();

BlogRoutes.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);

BlogRoutes.patch(
  '/:id',
  auth(USER_ROLE.user),

  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

BlogRoutes.delete(
  '/:id',
  auth(USER_ROLE.user),
  BlogControllers.deleteBlog,
);

BlogRoutes.get('/', BlogControllers.getAllBlogs)

export default BlogRoutes;

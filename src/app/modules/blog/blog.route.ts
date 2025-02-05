import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';
const BlogRoutes = express.Router();

BlogRoutes.post(
  '/',
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);

BlogRoutes.patch(
  '/:id',
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

BlogRoutes.delete(
  '/:id',
  BlogControllers.deleteBlog,
);

BlogRoutes.get('/', BlogControllers.getAllBlogs)

export default BlogRoutes;

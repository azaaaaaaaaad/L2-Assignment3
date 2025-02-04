import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    content: z.string({ required_error: 'content is required' }),
    author: z.string({ required_error: 'author is required' }),
    isPublished: z.boolean().optional().default(true),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is  required' }).optional(),
    content: z.string({ required_error: 'content is  required' }).optional(),
    author: z.string({ required_error: 'author is  required' }).optional(),

  }),
});

export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};

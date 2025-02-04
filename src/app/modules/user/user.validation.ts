import { z } from 'zod';

const userValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        isBlocked: z.boolean().optional(),
      }),
});

const loginValidationSchema = z.object({
    body: z.object({
        email: z.string({required_error: 'email is required'}).email(),
        password: z.string({required_error: 'password is required'})
    })
})

export const userValidations = {
  userValidationSchema,
  loginValidationSchema
};

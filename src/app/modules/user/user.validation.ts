import { z } from 'zod';

const userValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
        isBlocked: z.boolean().optional(),
      }),
});

export const userValidations = {
  userValidationSchema,
};

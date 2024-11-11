import { isValidLink } from '@/utils/utils';
import { z } from 'zod';

const CreateLinksSchema = z
  .object({
    path: z.string().max(10, 'Path cannot be greater than 10 characters').optional(),

    to: z
      .string()
      .min(1, 'To link is required')
      .refine((val) => isValidLink(val), {
        message: 'Please enter a valid link',
      }),

    randomPath: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.randomPath && !data.path) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['path'],
        message: 'Either path or randomPath is required',
      });
    }
  });

export type T_CreatteLinks = z.infer<typeof CreateLinksSchema>;

export const validateLinksInput = (data: T_CreatteLinks) => {
  return CreateLinksSchema.parse(data);
};

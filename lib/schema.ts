import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

const emailListSchema = z
  .array(
    z.object({
      email: z.string().email("Invalid email format"),
      name: z.string(),
    }),
  )
  .optional()
  .nullable();

export const BroadcastSchema = toTypedSchema(
  z
    .object({
      subject: z
        .string({
          required_error: "Subject is required",
        })
        .min(2, {
          message: "Subject cannot be empty",
        }),

      message: z
        .string({
          required_error: "Last name is required",
        })
        .min(20, {
          message: "Message is too short",
        }),

      sendEmail: z.boolean().default(false),

      emails: emailListSchema,

      sendToAll: z.boolean().default(false),
    })
    .refine(
      (data) => {
        if (data.sendToAll) {
          return true;
        }
        return data.emails && data.emails.length > 0;
      },
      {
        message: "Please provide email list when not sending to all",
        path: ["emails"],
      },
    ),
);

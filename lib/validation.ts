import { z } from "zod";

export type ValidationMessages = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export const createLeadFormSchema = (messages: ValidationMessages) =>
  z.object({
    name: z.string().trim().min(2, messages.name),
    email: z.string().trim().email(messages.email),
    company: z.string().trim().min(2, messages.company),
    message: z.string().trim().min(20, messages.message),
  });

export const leadFormSchema = createLeadFormSchema({
  name: "Please enter your name.",
  email: "Enter a valid work email.",
  company: "Please enter your company name.",
  message: "Tell us a little more about your workflow.",
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

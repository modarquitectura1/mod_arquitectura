import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z
    .string()
    .min(1, { message: "El correo es obligatorio" })
    .email({ message: "Correo inválido" }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: "El mensaje es obligatorio" }),
});

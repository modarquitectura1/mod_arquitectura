import { Resend } from "resend";

import NewUser from "@/emails/NewUser";
import WelcomeEmail from "@/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const json = await request.json();

  try {
    const { userName, userEmail, userPhone, userMessage } = json;

    const { data, error } = await resend.batch.send([
      {
        from: "MOD Arquitectura <info@notifications.modarquitectura.com>",
        to: [userEmail],
        subject:
          "MOD Arquitectura. Nos pondremos en contacto contigo lo antes posible.",
        react: WelcomeEmail({ userName }),
      },

      {
        from: "MOD Arquitectura <info@notifications.modarquitectura.com>",
        to: ["modarquitectura1@gmail.com"],
        subject: "Nuevo cliente se ha contactado",
        react: NewUser({ userName, userEmail, userPhone, userMessage }),
      },
    ]);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}

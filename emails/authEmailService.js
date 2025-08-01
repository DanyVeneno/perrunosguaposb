import { createTransport } from "../config/nodemailer.js";

export async function sendEmailVerification({ name, email, token }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );

  // Enviar el email
  const info = await transporter.sendMail({
    from: "PerrunosGuapos <cuentas@perrunosguapos.com>",
    to: "correo@correo.com",
    subject: "PerrunosGuapos - Confirma tu cuenta",
    text: "PerrunosGuapos - Confirma tu cuenta",
    html: `<p>Hola: ${name}, confirma tu cuenta en PerrunosGuapos</p>
            <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace:</p>
            <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar cuenta</a>
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
  });

  console.log("Mensaje enviado", info.messageId);
}

export async function sendEmailPasswordReset({ name, email, token }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );

  // Enviar el email
  const info = await transporter.sendMail({
    from: "PerrunosGuapos <cuentas@perrunosguapos.com>",
    to: email,
    subject: "PerrunosGuapos - Reestablece tu password",
    text: "PerrunosGuapos - Reestablece tu password",
    html: `<p>Hola: ${name}, has solicitado reestablecer tu password</p>
            <p>Sigue el siguiente enlace para generar un nuevo password:</p>
            <a href="${process.env.FRONTEND_URL}/auth/olvide-password/${token}">Reestablecer Password</a>
            <p>Si tu no solicitaste esto, puedes ignorar este mensaje</p>
        `
  });

  console.log("Mensaje enviado", info.messageId);
}

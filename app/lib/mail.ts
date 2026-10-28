import { readFileSync } from 'node:fs'
import nodemailer from 'nodemailer'

// SMTP OVH de la boîte contact@associationmidas.fr. Mot de passe via podman secret (SMTP_PASSWORD_FILE).
function transporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD_FILE ? readFileSync(process.env.SMTP_PASSWORD_FILE, 'utf8').trim() : '',
    },
  })
}

export async function sendContactMail({ name, email, message }: { name: string; email: string; message: string }) {
  const oneLine = name.replace(/[\r\n]+/g, ' ')
  await transporter().sendMail({
    from: { name: 'Site Cabaret MIDAS', address: process.env.SMTP_USER! },
    to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
    replyTo: { name: oneLine, address: email },
    subject: `[Site MIDAS] Message de ${oneLine}`,
    text: `Nom : ${name}\nE-mail : ${email}\n\n${message}\n`,
  })
}

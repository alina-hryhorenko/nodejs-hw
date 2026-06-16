import 'dotenv/config';
import nodemailer from 'nodemailer';

export const sendMail = async (options) => {
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM,
    ...options,
  });
};

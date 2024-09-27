import nodemailer from 'nodemailer';
import { escape } from 'html-escaper';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail(name: string, email: string, message: string) {
  const escapedMessage = escape(message).replace(/\n/g, '<br>');

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    throw new Error("SMTP configuration is missing");
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'rahulbhardwaj@benzeenautoparts.com',
      to: process.env.SMTP_TO || 'iamrahul.2.three@gmail.com' ,
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Message:</strong> ${escapedMessage}</p>
      `,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
    throw new Error("Failed to send email");
  }
}

// app/api/contact/route.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();


  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });



  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New contact form submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Error sending email', { status: 500 });
  }
}

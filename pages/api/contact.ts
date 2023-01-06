import * as dotenv from 'dotenv';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  statusMessage: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  dotenv.config();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.MAIL_USERNAME,
    to: 'ilyuha45@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: req.body.message,
    html: `
      Name: ${req.body.name}<br>
      E-mail: ${req.body.email}<br>
      Message: ${req.body.message}
    `,
  };

  transporter.sendMail(
    mailData,
    function (err: Error | null, info: nodemailer.SentMessageInfo) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    }
  );

  res.status(200).json({ statusMessage: 'E-mail sent successfuly!' });
}

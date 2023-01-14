import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.body.token) {
    return res.status(400).json({ statusMessage: 'Missing reCaptcha token' });
  }

  if (!req.body.name || !req.body.email || !req.body.message) {
    return res
      .status(400)
      .json({ statusMessage: 'Not all form fields have been filled!' });
  }

  if (!process.env.MAIL_USERNAME || !process.env.MAIL_PASSWORD) {
    return res
      .status(400)
      .json({ statusMessage: 'nodemailer: Missing .env variables' });
  }

  async function handleRecaptcha(req: NextApiRequest) {
    try {
      const apiResponse = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.token}`,
        }
      );
      const apiResponseJson = await apiResponse.json();
      return apiResponseJson;
    } catch (error) {
      console.error(error);
    }
  }

  const recaptchaResponse = await handleRecaptcha(req);

  if (!recaptchaResponse.success) {
    return res
      .status(400)
      .json({ statusMessage: 'ReCaptcha verification failed' });
  }

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

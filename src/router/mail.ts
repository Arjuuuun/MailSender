import { Router } from 'express';
import nodemailer from 'nodemailer';

const sendEmailRouter = Router()

sendEmailRouter.route('/send').post((req,res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'arjunachu384@gmail.com',
          pass: 'oiys tsrn vcwu bbmh'
        }
      });

      // Define email options
  const mailOptions = {
    from: 'arjunachu384@gmail.com',
    to: "arjunachu384@gmail.com",
    subject: "subject",
    text: req.body.message
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent');
    }
  });
});

export default sendEmailRouter;
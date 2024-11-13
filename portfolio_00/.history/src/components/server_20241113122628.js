// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { email, message } = req.body;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // Use environment variable
      pass: process.env.PASSWORD, // Use environment variable
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL, // Use environment variable
    subject: 'Contact Form Submission',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error); // Log error for debugging
      return res.status(500).send('Failed to send message.'); // Send user-friendly message
    }
    res.status(200).send('Message sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
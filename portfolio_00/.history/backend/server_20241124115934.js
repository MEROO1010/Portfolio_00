const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend origin

// POST /api/contact endpoint
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  // Validate input
  if (!email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for email
        pass: process.env.EMAIL_PASS, // Environment variable for app password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Receiving email
      subject: 'New Contact Form Submission',
      text: `You have a new message from:\n\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

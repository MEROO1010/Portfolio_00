const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from frontend

// POST /Contact endpoint
app.post('/Contact', async (req, res) => {
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
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-app-password',   // Replace with your app password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com', // Your receiving email
      subject: 'New Contact Form Submission',
      text: `You have a new message from:\n\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


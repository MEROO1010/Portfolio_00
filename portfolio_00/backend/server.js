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
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: `You have a new message:\n\nFrom: ${email}\n\nMessage:\n${message}`,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Start server
const PORT = process.env.PORT ||3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
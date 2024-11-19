// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Change this to your email service provider
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password", // Replace with your email password or app password
  },
});

// API Endpoint
app.post("/api/contact", async (req, res) => {
  const { email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "your-email@gmail.com", // Replace with your receiving email
      subject: "New Contact Form Message",
      text: message,
    });
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Error sending message.");
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

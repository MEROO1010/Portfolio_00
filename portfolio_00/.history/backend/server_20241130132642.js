const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  // Simulate saving to a database or sending an email
  console.log(`Received contact form submission:`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  return res.status(200).json({ message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled components
const ContactSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #f9f9f9;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #00b894;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #019474;
  }
`;

const StatusMessage = styled.p`
  margin-top: 20px;
  color: ${({ isError }) => (isError ? 'red' : 'green')};
`;

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(''); // Clear previous status
    setIsError(false);

    try {
      const response = await axios.post('http://localhost:5000/api/Contact', {
        email,
        message,
      });
      setStatus(response.data.message); // Display success message
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus(err.response?.data?.error || 'An unexpected error occurred.');
      setIsError(true);
    }
  };

  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
      {status && <StatusMessage isError={isError}>{status}</StatusMessage>}
    </ContactSection>
  );
}

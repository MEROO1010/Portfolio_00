import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', {
        email,
        message,
      });
      setStatus(response.data.success);
    } catch (err) {
      setStatus(err.response.data.error);
    }
  };

  return (
    <ContactSection>
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </Form>
      {status && <p>{status}</p>}
    </ContactSection>
  );
}

import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send email and message to backend
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Email sent successfully!');
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error sending email!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <StyledTitle>Contact.</StyledTitle>
      <StyledInput
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextarea
        placeholder="Your Massage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <StyledButton type="submit">Send</StyledButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const StyledTextarea = styled.textarea`
  padding: 1 0px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  height: 100px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ContactForm;
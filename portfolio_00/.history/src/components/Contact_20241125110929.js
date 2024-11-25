// ContactForm.js
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Behance from "../assets/Behance.png";
import Github from "../assets/GitHub.png";
import X from "../assets/X.png";
import LinkedIn from "../assets/LinkedIn.png"

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #48c774;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  background-color: #48c774;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3faa63;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #888;
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  a {
    margin: 0 5px;
    color: #888;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: #48c774;
    }
  }
`;

// Functional Component
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Added state for status message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Clear previous status message

    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        email,
        message,
      });
      setStatus(response.data.message); // Set success/error message from response
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <Container>
      <Title>Contact.</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Send</Button>
      </form>
      <Footer>
      
      </Footer>
    </Container>
  );
};

export default Contact;
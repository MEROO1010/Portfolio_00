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
const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/contact", { email, message });
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message.");
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
        <FooterText>© 2023 All rights reserved</FooterText>
        <SocialIcons>
          <a href="https://www.behance.net/merooalsaggaf#"><img src={Behance} alt=""/></a>
          <a href="https://github.com/MEROO1010"><img src={Github} alt=""/></a>
          <a href="https://x.com/meroo_alsaggaf"><img src={X} alt=""/></a>
          <a href="https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/"><img src={LinkedIn} alt=""/></a>
        </SocialIcons>
      </Footer>
    </Container>
  );
};

export default ContactForm;

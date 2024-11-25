import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // For backend integration
import Behance from "../assets/Behance.png";
import Github from "../assets/GitHub.png";
import X from "../assets/X.png";
import LinkedIn from "../assets/LinkedIn.png"
import ImageLogo from '../assets/white_logo.png';
import ContactBG from '../assets/contactBG.png';


export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${ContactBG});
  background-size: cover;
  height: 100%;
  position: relative;
`;

export const ContactTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  position: relative;
  margin-top:150px;
  span {
    color: #28a745; /* Green color */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  position: relative;
  margin-top:40px;
`;

export const Input = styled.input`
  padding: 14px;
  border: 1px solid #DEDEDE;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  background-color:#DEDEDE;
  position: relative;
  margin-top:40px;

  &:focus {
    border-color: #28a745;
  }
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border: 1px solid #DEDEDE;
  border-radius: 25px;
  font-size: 1rem;
  resize: none;
  outline: none;
  background-color:#DEDEDE;
  position: relative;
  margin-top:20px;
  height:140px;

  &:focus {
    border-color: #28a745;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 2rem;
  font-weight:bold;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  margin-top:60px;

  &:hover {
    background-color: #218838;
  }
`;

export const StatusMessage = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #333;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
  position: relative;
  margin-top:60px;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled.a`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #28a745;
  }
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  color: #666;
`;


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        email,
        message,
      });
      setStatus(response.data.message);
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <ContactContainer>
      <ContactTitle>
        <span>Contact.</span>
      </ContactTitle>
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
      {status && <StatusMessage>{status}</StatusMessage>}
      <Footer>
        <Logo><img src={ImageLogo} alt="Description of image" /></Logo>
        <SocialIcons>
          <Icon href="https://www.behance.net/merooalsaggaf" target="_blank"><img src={Behance} alt=""/></Icon>
          <Icon href="https://github.com/MEROO1010" target="_blank"><img src={Github} alt=""/></Icon>
          <Icon href="https://x.com/meroo_alsaggaf" target="_blank"><img src={X} alt=""/></Icon>
          <Icon href="https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/" target="_blank"><img src={LinkedIn} alt=""/></Icon>
        </SocialIcons>
        <Copyright>© 2023 All rights reserved</Copyright>
      </Footer>
    </ContactContainer>
  );
};

export default Contact;

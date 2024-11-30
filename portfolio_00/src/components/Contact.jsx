import React, { useState } from 'react';
import styled from 'styled-components';
import Behance from "../assets/Behance.png";
import Github from "../assets/GitHub.png";
import X from "../assets/X.png";
import LinkedIn from "../assets/LinkedIn.png"
import ImageLogo from '../assets/white_logo.png';
import ContactBG from '../assets/contactBG.png';


const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${ContactBG});
  background-size: cover;
  height: 100%;
  position: relative;
  
`;

const ContactTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  position: relative;
  margin-top:150px;
  span {
    color: #28a745; /* Green color */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  position: relative;
  margin-top:40px;
`;

const Input = styled.input`
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

const Textarea = styled.textarea`
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

const Button = styled.button`
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

const StatusMessage = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #333;
`;

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
  position: relative;
  margin-top:150px;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Icon = styled.a`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #28a745;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #666;
`;


const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });
    const result = await response.json();
    setResponse(result.message);
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
      {response && <p>{response}</p>}
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

import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <FormContainer>
      <Logo>🟩</Logo> {/* Replace with an SVG or logo */}
      <Heading>
        Contact<span>.</span>
      </Heading>
      <Form>
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <Button>Send</Button>
      </Form>
      <Footer>
        <FooterLogo>MS</FooterLogo>
        <SocialLinks>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i>
          </a>
        </SocialLinks>
        <Copyright>© 2023 All rights reserved</Copyright>
      </Footer>
    </FormContainer>
  );
};

export default ContactForm;

// Styled Components
const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  span {
    color: #28a745;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  height: 100px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const Footer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  margin-bottom: 10px;
  a {
    margin: 0 10px;
    font-size: 1.2rem;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #28a745;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #888;
`;

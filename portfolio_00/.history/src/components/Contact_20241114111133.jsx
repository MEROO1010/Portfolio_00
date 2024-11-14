import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Section>
      <Title>Contact.</Title>
      <Form>
        <Label htmlFor="email" className="visually-hidden">Your Email</Label>
        <Input type="email" id="email" placeholder="Your Email" />
        <Label htmlFor="message" className="visually-hidden">Your Message</Label>
        <TextArea id="message" placeholder="Your Message" />
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: #3bb873;
  text-align: center;
  font: 600 65px/2 Poppins, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 880px;
`;

const Label = styled.label`
  &.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const Input = styled.input`
  border-radius: 50px;
  background-color: #dedede;
  margin-top: 68px;
  width: 100%;
  color: #888;
  text-align: center;
  padding: 20px;
  font: 400 50px/2 Poppins, sans-serif;
  border: none;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
    padding: 10px 20px;
  }
`;

const TextArea = styled.textarea`
  border-radius: 50px;
  background-color: #dedede;
  margin-top: 54px;
  width: 100%;
  color: #888;
  text-align: center;
  padding: 20px;
  font: 400 50px/2 Poppins, sans-serif;
  border: none;
  resize: vertical;
  min-height: 200px;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
    padding: 10px 20px;
    min-height: 150px;
  }
`;

const SubmitButton = styled.button`
  border-radius: 50px;
  background-color: #3bb873;
  margin-top: 95px;
  width: 500px;
  max-width: 100%;
  color: #fff;
  text-align: center;
  padding: 20px;
  font: 600 50px/2 Poppins, sans-serif;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
    padding: 10px 20px;
  }
`;

export default Contact;
import React from 'react';
import styled from 'styled-components';
import Behance from "../assets/Behance.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: #000;
  margin-bottom: 1em;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: normal;
  color: #000;
  margin-bottom: 2em;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 2em;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello! I'm</Title>
      <Title>Marwah Alsaggaf</Title>
      <Subtitle>Graphic Designer &</Subtitle>
      <Subtitle>Full-stack Developer</Subtitle>
      <SocialLinks>
        <SocialLink href="https://www.behance.net/merooalsaggaf" target="_blank">
          <span><img src={Behance}/></span>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/" target="_blank">
          <span>LinkedIn</span>
        </SocialLink>
        <SocialLink href="https://github.com/MEROO1010" target="_blank">
          <span>GitHub</span>
        </SocialLink>
      </SocialLinks>
      <Button>Contact Me</Button>
    </Container>
  );
};

export default App;
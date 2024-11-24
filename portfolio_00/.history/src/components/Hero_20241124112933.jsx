import React from 'react';
import styled from 'styled-components';
import BG from "../assets/BG_HomePage.png";
import Behance from "../assets/Behance.png";
import Github from "../assets/GitHub.png";
import X from "../assets/X.png";
import LinkedIn from "../assets/LinkedIn.png";

const HeroSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-image: url(${BG});
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  color: #555;
  margin-bottom: 2rem;
`;

const CVButton = styled.a`
background-color: #000;
  color: #fff;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-bottom: 20px;
  margin-right:800px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 20px;
  margin-right:800px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  
 
 
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;


export default function Hero() {
  return (
    <HeroSection>
      <Title>Marwah Alsaggaf</Title>
      <Subtitle>Graphic Designer & Full-stack Developer</Subtitle>
      <SocialLinks>
        <SocialLink href="https://www.behance.net/merooalsaggaf" target="_blank">
          <span><img src={Behance} alt=""/></span>
        </SocialLink>
        <SocialLink href="https://github.com/MEROO1010" target="_blank">
          <span><img src={Github} alt=""/></span>
        </SocialLink>
        <SocialLink href="https://x.com/meroo_alsaggaf" target="_blank">
          <span><img src={X} alt=""/></span>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/marwah-alsaggaf-ba44011b2/" target="_blank">
          <span><img src={LinkedIn} alt=""/></span>
        </SocialLink>
      </SocialLinks>
      <CVButton href="#">CV Here</CVButton>
    </HeroSection>
  );
}

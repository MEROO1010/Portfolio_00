import React from 'react';
import styled from 'styled-components';
import BG from '../assets/BG_HomePage.png';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../assets/BG_HomePage.png') no-repeat center center/cover;
`;

const HeroText = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>Welcome to My Portfolio</HeroText>
      <img src={BG} alt="Description of image" />
    </HeroSection>
  );
};

export default Hero;
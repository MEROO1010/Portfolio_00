import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #f7f8fa;
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
  background: #00b894;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background: #019474;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Title>Marwah Alsaggaf</Title>
      <Subtitle>Graphic Designer & Full-stack Developer</Subtitle>
      <CVButton href="#">CV Here</CVButton>
    </HeroSection>
  );
}

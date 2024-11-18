import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

const Icon = styled.svg`
  width: 50px;
  height: 50px;
  fill: #5cb85c;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Services = () => {
  return (
    <Container>
      <Title>Services</Title>
      <Subtitle>Our team members are experts in all facets of the design industry including: print design, illustration, branding, identity and more.</Subtitle>
      <ServicesContainer>
        <ServiceCard>
          <Icon viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" stroke="#5cb85c" strokeWidth="2" />
            <line x1="2 0" y1="50" x2="100" y2="50" stroke="#5cb85c" strokeWidth="2" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#5cb85c" strokeWidth="2" />
          </Icon>
          <ServiceTitle>Design</ServiceTitle>
          <p>Creative design solutions tailored to your needs.</p>
        </ServiceCard>
        <ServiceCard>
          <Icon viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#5cb85c" strokeWidth="2" />
          </Icon>
          <ServiceTitle>Branding</ServiceTitle>
          <p>Building strong brand identities that resonate.</p>
        </ServiceCard>
        <ServiceCard>
          <Icon viewBox="0 0 100 100">
            <polygon points="50,15 90,85 10,85" stroke="#5cb85c" strokeWidth="2" fill="none" />
          </Icon>
          <ServiceTitle>Illustration</ServiceTitle>
          <p>Unique illustrations that tell your story.</p>
        </ServiceCard>
      </ServicesContainer>
    </Container>
  );
};

export default Services;
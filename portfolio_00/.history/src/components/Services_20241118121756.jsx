import React from "react";
import styled from "styled-components";
import UI_UX from "../assets/UI_UX.png";
import programming from "../assets/Programming.png";

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
      <Subtitle>
        Our team members are experts in all facets of the design industry
        including: print design, illustration, branding, identity and more.
      </Subtitle>
      <ServicesContainer>
        <ServiceCard>
          <img src={UI_UX} alt="" />
          <ServiceTitle>UI/UX Design</ServiceTitle>
        </ServiceCard>
        <ServiceCard>
          <img src={programming} alt="" />
          <ServiceTitle>Programming</ServiceTitle>
        </ServiceCard>
      </ServicesContainer>
    </Container>
  );
};

export default Services;

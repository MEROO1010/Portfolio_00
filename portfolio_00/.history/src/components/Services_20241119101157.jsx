import React from "react";
import styled from "styled-components";
import UI_UX from "../assets/UI_UX.png";
import programming from "../assets/Programming.png";
import webdesign from "../assets/web_design.png";
import graphic_design from "../assets/graphic_design.png";
import bg3 from "../assets/services_bg.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  background-image: url(${bg3});
  background-position: center;
  background-size:cover;
  height: 120vh;
  
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  p{
    text-align: center;
  }
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
  padding: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  margin-right:40px;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
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
        including: print<br/> <p>design, illustration, branding, identity and more.</p>
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
        <ServiceCard>
          <img src={webdesign} alt="" />
          <ServiceTitle>Web Design</ServiceTitle>
        </ServiceCard>
        <ServiceCard>
          <img src={graphic_design} alt="" />
          <ServiceTitle>Graphic Design</ServiceTitle>
        </ServiceCard>
      </ServicesContainer>
    </Container>
  );
};

export default Services;

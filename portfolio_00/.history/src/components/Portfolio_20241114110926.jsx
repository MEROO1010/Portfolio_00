import React from "react";
import styled from "styled-components";
import PortfolioGrid from "./PortfolioGrid";

function Portfolio() {
  return (
    <Section>
      <Title>Portfolio.</Title>
      <PortfolioGrid />
      <CtaButton>View More</CtaButton>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  margin-top: 31px;
  width: 100%;
  max-width: 1860px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: #3bb873;
  text-align: center;
  font: 600 65px/2 Poppins, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const CtaButton = styled.button`
  border-radius: 50px;
  background-color: #3bb873;
  margin-top: 122px;
  width: 276px;
  color: #fff;
  text-align: center;
  padding: 20px;
  font: 600 24px Poppins, sans-serif;
  border: none;
  cursor: pointer;
  box-shadow: 0px 8px 18px rgba(255, 103, 0, 0.32);
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Portfolio;
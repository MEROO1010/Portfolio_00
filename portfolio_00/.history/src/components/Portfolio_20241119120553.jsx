import React from 'react';
import styled from 'styled-components';
import PortfolioItem from "./PortfolioItem";
import Mug from "../assets/cup.png";
import App_design from "../assets/app_design.png";
import Tea from "../assets/tea.png";
import Card_design from "../assets/card_design.png";
import Burger_ads from "../assets/burger_Ads.png";


// Styled Components
const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 10 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 24px;
`;

const Highlighted = styled.span`
  color: #28a745; //Green color
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
    <Title>
      Our Regular Updated <br/><Highlighted>Portfolio.</Highlighted>
    </Title>
    <PortfolioGrid>
      <PortfolioItem
        image={Mug}
        altText="Mug design with Arabic text"
      />
      <PortfolioItem
        image={App_design}
        altText="Mobile app designs"
      />
      <PortfolioItem
        image={Tea}
        altText="Tea packaging design"
      />
      <PortfolioItem
        image={Card_design}
        altText="Kidzy business card design"
      />
      <PortfolioItem
        image={Burger_ads}
        altText="Burger advertisement in Arabic"
      />
    </PortfolioGrid>
  </PortfolioContainer>
  );
};

export default Portfolio;






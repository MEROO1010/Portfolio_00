import React from 'react';
import styled from 'styled-components';
import Mug from "../assets/cup.png";
import App_design from "../assets/app_design.png";
import Tea from "../assets/tea.png";
import Card_design from "../assets/card_design.png";
import Burger_ads from "../assets/burger_Ads.png";

export const PortfolioContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;

  span {
    color: #28a745; /* Green color */
  }
`;

export const GridContainer = styled.div`
  width: 1900;
   height: 862;
   position: 'relative';
`;

export const PortfolioItem = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;


const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Header>Our Regular Updated <span><br/>Portfolio.</span></Header>
      <GridContainer style={{width: 1802, height: 862, position: 'relative'}}>
        <PortfolioItem>
          <Image src={Mug} alt="Mug Design" height={200} style={{width: 708, height: 862, left: 0, top: 0, position: 'absolute'}}/>
        </PortfolioItem>
        <PortfolioItem>
          <Image src={App_design} style={{width: 482.12, height: 406.70, left: 1319.88, top: 0, position: 'absolute'}} alt="Mobile App Mockup" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src={Tea} style={{width: 482.12, height: 406.70, left: 789.31, top: 0, position: 'absolute'}} alt="Tea Package" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src={Card_design} style={{width: 482.12, height: 404.14, left: 1319.88, top: 457.86, position: 'absolute'}}alt="Kidzy Logo" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src={Burger_ads}style={{width: 482.12, height: 404.14, left: 789.31, top: 457.86, position: 'absolute'}} alt="Burger Ad" />
        </PortfolioItem>
      </GridContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;

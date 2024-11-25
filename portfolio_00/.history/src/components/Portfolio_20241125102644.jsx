// Install styled-components using `npm install styled-components`
import React from "react";
import styled from "styled-components";
import Mug from "../assets/cup.png";
import App_design from "../assets/app_design.png";
import Tea from "../assets/tea.png";
import Card_design from "../assets/card_design.png";
import Burger_ads from "../assets/burger_Ads.png";

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #000;
  span {
    color: #28a745; /* Green for "Portfolio" */
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const PortfolioItem = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

// Main Component
const Portfolio = () => {
  // Replace these with your actual image paths
  const portfolioItems = [
    { id: 1, img: {Mug}, alt: "Item 1" },
    { id: 2, img: {App_design}, alt: "Item 2" },
    { id: 3, img: {Tea}, alt: "Item 3" },
    { id: 4, img: {Card_design}, alt: "Item 4" },
    { id: 5, img: {Burger_ads}, alt: "Item 5" },
  ];

  return (
    <Container>
      <Header>
        Our Regular Updated <span>Portfolio.</span>
      </Header>
      <PortfolioGrid>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id}>
            <img src={item.img} alt={item.alt} />
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </Container>
  );
};

export default Portfolio;

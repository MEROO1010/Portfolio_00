import React from 'react';
import styled from 'styled-components';


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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const PortfolioItem = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
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
      <Header>Our Regular Updated <span>Portfolio.</span></Header>
      <GridContainer>
        <PortfolioItem>
          <Image src="path_to_mug_image.jpg" alt="Mug Design" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src="path_to_mobile_mockup.jpg" alt="Mobile App Mockup" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src="path_to_tea_package.jpg" alt="Tea Package" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src="path_to_kidzy_logo.jpg" alt="Kidzy Logo" />
        </PortfolioItem>
        <PortfolioItem>
          <Image src="path_to_burger_ad.jpg" alt="Burger Ad" />
        </PortfolioItem>
      </GridContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;

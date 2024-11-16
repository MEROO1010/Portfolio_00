import React from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

const PortfolioItem = styled.div`
  margin: 20px 0;
`;

const Portfolio = () => {
  return (
    <PortfolioSection>
      <h2>My Work</h2>
      <PortfolioItem>Project 1</PortfolioItem>
      <PortfolioItem>Project 2</PortfolioItem>
      <PortfolioItem>Project 3</PortfolioItem>
    </PortfolioSection>
  );
};

export default Portfolio;
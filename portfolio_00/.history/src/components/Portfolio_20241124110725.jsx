import React from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 50px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const PortfolioItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Portfolio() {
  return (
    <PortfolioSection>
      <h2>Portfolio</h2>
      <PortfolioGrid>
        <PortfolioItem>
          <img src="https://via.placeholder.com/300" alt="Portfolio Item 1" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="https://via.placeholder.com/300" alt="Portfolio Item 2" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="https://via.placeholder.com/300" alt="Portfolio Item 3" />
        </PortfolioItem>
        <PortfolioItem>
          <img src="https://via.placeholder.com/300" alt="Portfolio Item 4" />
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioSection>
  );
}

// PortfolioItem.js
import React from "react";
import styled from "styled-components";

const PortfolioItem = ({ image, altText }) => {
  return (
    <ItemContainer>
      <Image src={image} alt={altText} />
    </ItemContainer>
  );
};

export default PortfolioItem;

// Styled Components
const ItemContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #FAF9F6;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

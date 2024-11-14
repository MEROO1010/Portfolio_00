import React from "react";
import styled from "styled-components";

function PortfolioItem({ src }) {
  return <Image loading="lazy" src={src} alt="Portfolio item" />;
}

const Image = styled.img`
  aspect-ratio: 1.18;
  object-fit: contain;
  object-position: center;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default PortfolioItem;
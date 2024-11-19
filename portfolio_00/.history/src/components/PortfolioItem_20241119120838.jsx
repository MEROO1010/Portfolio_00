import React from "react";
import styled from "styled-components";

const PortfolioItem = ({ image, alt, customStyles }) => {
  return (
    <CustomWrapper as={customStyles}>
      <Image src={image} alt={alt} />
    </CustomWrapper>
  );
};

// Styled Components for PortfolioItem
const CustomWrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export default PortfolioItem;

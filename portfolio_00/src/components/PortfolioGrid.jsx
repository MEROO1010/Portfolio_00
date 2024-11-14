import React from "react";
import styled from "styled-components";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d8e583d11c0814d2aa862466b56fb45f45efa5aef14893ee86d87e1a8c95420?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b" },
  { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5b4f526c3b5e51fd094b67bd3d7fea4efe58520e64cacd0d02f21bf3c72cfd1?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b" },
  { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cfecb5bba39577276ec1de7498d56d94e9fe205863aa678b3c4bb52a78be91d?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b" },
  { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f68599d6a9ca79dece856f272735a81af62e23af80acc73258ec5380d0fae390?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b" },
  { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/335cbc91262fa9b230d13a8af335f57a95b265dca42cc097d0c89b7d5e5cbe36?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b" },
];

function PortfolioGrid() {
  return (
    <Grid>
      {portfolioData.map((item) => (
        <PortfolioItem key={item.id} src={item.src} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export default PortfolioGrid;
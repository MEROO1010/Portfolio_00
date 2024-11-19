import React from "react";
import styled from "styled-components";
import PortfolioItem from "./PortfolioItem";
import Mug from "../assets/cup.png";
import App_design from "../assets/app_design.png";
import Tea from "../assets/tea.png";
import Card_design from "../assets/card_design.png";
import Burger_ads from "../assets/burger_Ads.png";

const Portfolio = () => {
  return (
    <Container>
      <Title>
        Our Regular Updated <br/> <Highlighted>Portfolio.</Highlighted>
      </Title>
      <Grid>
        <PortfolioItem
          image={Mug}
          alt="Mug Design"
          customStyles={MugStyles}
        />
        <PortfolioItem
          image={App_design}
          alt="Mobile App Designs"
          customStyles={MobileStyles}
        />
        <PortfolioItem
          image={Tea}
          alt="Tea Packaging Design"
          customStyles={TeaStyles}
        />
        <PortfolioItem
          image={Card_design}
          alt="Kidzy Business Card"
          customStyles={KidzyStyles}
        />
        <PortfolioItem
          image={Burger_ads}
          alt="Burger Advertisement"
          customStyles={BurgerStyles}
        />
      </Grid>
    </Container>
  );
};

// Styled Components for App Layout
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color:#FAF9F6;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Highlighted = styled.span`
  color: #28a745; // Green color for "Portfolio."
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

// Custom styles for each image (passed as props)
const MugStyles = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const MobileStyles = styled.div`
  background-color: #fffae6;
  padding: 20px;
  border: 2px solid #ffc107;
  border-radius: 10px;
`;

const TeaStyles = styled.div`
  background-color: #f3f3f3;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const KidzyStyles = styled.div`
  background-color: #fdf5d5;
  padding: 15px;
  border: 1px solid #f7d879;
  border-radius: 10px;
`;

const BurgerStyles = styled.div`
  background: linear-gradient(135deg, #ffe5b4, #ffcc80);
  padding: 15px;
  border-radius: 8px;
`;

export default Portfolio;

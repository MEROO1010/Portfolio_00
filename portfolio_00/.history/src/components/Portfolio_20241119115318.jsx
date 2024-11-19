import React from 'react';
import styled from 'styled-components';
import Mug from "../assets/cup.png";
import App_design from "../assets/app_design.png";
import Tea from "../assets/tea.png";
import Card_design from "../assets/card_design.png";
import Burger_ads from "../assets/burger_Ads.png";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;


const Portfolio = () => {
  return (
    <Container>
      <Title>Our Regular Updated Portfolio.</Title>
      <ImageContainer>
        <Image src={Mug} alt="Mug with logo" />
      </ImageContainer>
      <ImageContainer>
        <Image src={App_design} alt="App screens" />
      </ImageContainer>
      <ImageContainer>
        <Image src={Tea} alt="Tea packaging" />
      </ImageContainer>
      <ImageContainer>
        <Image src={Card_design} alt="Kidzy logo" />
      </ImageContainer>
      <ImageContainer>
        <Image src={Burger_ads} alt="Burger advertisement" />
      </ImageContainer>
    </Container>
  );
};

export default Portfolio;

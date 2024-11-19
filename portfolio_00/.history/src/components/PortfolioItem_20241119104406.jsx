import React from 'react';
import styled from 'styled-components';
import Mug from "../assets/cup.png";
import App_design from "../assets/app_design.png";
import Tea from "../assets/tea.png";
import Card_design from "../assets/card_design.png";
import Burger_ads from "../assets/burger_Ads.png";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const Item = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

const Portfolio = () => {
  return (
    <Container>
      <Item>
        <Image src={Mug} alt="Mug" />
        <Title>شركة على القابضة</Title>
      </Item>
      <Item>
        <Image src={App_design} alt="App Screens" />
        <Title>Marwa Alsaggaf</Title>
      </Item>
      <Item>
        <Image src={Tea} alt="Tea Packaging" />
        <Title>سان عزام</Title>
      </Item>
      <Item>
        <Image src={Card_design} alt="Kidzy Logo" />
        <Title>Kidzy</Title>
       </Item>
      <Item>
        <Image src={Burger_ads} alt="Burger Ad" />
        <Title>برجر كنج</Title>
      </Item>
    </Container>
  );
};

export default Portfolio; 
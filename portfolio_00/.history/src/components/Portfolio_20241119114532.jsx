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
  background-color:#FAF9F6;
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
const Title = styled.div`
 h1{
  font-size:24px;
 }

`



const Portfolio = () => {
  return (
    <Container>
      <Title><h1>Our Regular Updated</h1></Title>
      <Item>
        <Image src={Mug} alt="Mug" />
        
      </Item>
      <Item>
        <Image src={App_design} alt="App Screens" />
        
      </Item>
      <Item>
        <Image src={Tea} alt="Tea Packaging" />
        
      </Item>
      <Item>
        <Image src={Card_design} alt="Kidzy Logo" />
        
       </Item>
      <Item>
        <Image src={Burger_ads} alt="Burger Ad" />
        
      </Item>
    </Container>
  );
};

export default Portfolio; 
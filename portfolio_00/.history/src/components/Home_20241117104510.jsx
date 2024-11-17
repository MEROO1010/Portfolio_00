import React from 'react';
import styled from 'styled-components';
import BG from '../assets/BG_HomePage.png';

const HomeContainer = styled.div`
  img{
    width: 100%;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to My Landing Page</h1>
      <img src={BG} alt="Description of image" />
    </HomeContainer>
  );
};

export default Home;
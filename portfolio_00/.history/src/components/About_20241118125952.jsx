import React from 'react';
import styled from 'styled-components';
import bg2 from "../assets/background2.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
  background-image: url(${bg2});
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  img{
    display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  
  z-index: 1;
  }
`;







const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Description>
           My name is Marwah Alsaggaf, and I'm a <br/>software developer in<br/> JavaScript,python,flutter and PHP 
           and<br/> graphic designer. I  <br/>          
            graduated from Arab Open<br/>  University with a major in<br/>
             Information Technology and<br/> Computing    
               </Description>
      <ImageContainer>
        
        
      </ImageContainer>
    </Container>
  );
};

export default About;
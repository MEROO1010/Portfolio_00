import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #666;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 2px;
  background-color: #333;
`;

const About = () => {
  return (
    <Container>
      <Title>About me</Title>
      <Text>
        My name is Marwah Alsaggaf, and I'm a software developer in
        JavaScript, python, flutter and PHP and graphic designer. I graduated from
        Arab Open University with a major in Information Technology and
        Computing.
 </Text>
      <ImageWrapper>
        <Image src="path_to_your_image.jpg" alt="About Me" />
        <Dot />
        <Line />
      </ImageWrapper>
    </Container>
  );
};

export default About;
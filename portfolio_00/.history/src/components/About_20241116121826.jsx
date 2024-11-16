import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <AboutText>
        I am a passionate developer with experience in building web applications.
      </AboutText>
    </AboutSection>
  );
};

export default About;
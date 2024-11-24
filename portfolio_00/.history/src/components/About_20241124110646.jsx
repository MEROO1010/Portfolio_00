import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 50px 20px;
  background: #f7f8fa;
  text-align: center;
`;

const AboutText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  color: #555;
`;

const Image = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <AboutText>
        My name is Marwah Alsaggaf, and I'm a software developer in JavaScript,
        Python, Flutter, and PHP, and a graphic designer. I graduated from the
        Arab Open University with a major in Information Technology and Computing.
      </AboutText>
      <Image src="https://via.placeholder.com/400" alt="Illustration" />
    </AboutSection>
  );
}

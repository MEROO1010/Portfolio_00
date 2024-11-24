import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #fff;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ServiceCard = styled.div`
  padding: 20px;
  background: #f7f8fa;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #333;

  h3 {
    color: #00b894;
    margin-bottom: 10px;
  }
`;

export default function Services() {
  return (
    <ServicesSection>
      <h2>Services</h2>
      <ServicesGrid>
        <ServiceCard>
          <h3>UI/UX Design</h3>
          <p>Beautiful and functional user interfaces.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Programming</h3>
          <p>Efficient and scalable code for your applications.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Web Design</h3>
          <p>Modern and responsive websites.</p>
        </ServiceCard>
        <ServiceCard>
          <h3>Graphic Design</h3>
          <p>Stunning visuals for your brand.</p>
        </ServiceCard>
      </ServicesGrid>
    </ServicesSection>
  );
}

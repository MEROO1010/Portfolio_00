import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

const ServiceItem = styled.div`
  margin: 20px 0;
`;

const Services = () => {
  return (
    <ServicesSection>
      <h2>My Services</h2>
      <ServiceItem>Web Development</ServiceItem>
      <ServiceItem>UI/UX Design</ServiceItem>
      <ServiceItem>SEO Optimization</ServiceItem>
    </ServicesSection>
  );
};

export default Services;
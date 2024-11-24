import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
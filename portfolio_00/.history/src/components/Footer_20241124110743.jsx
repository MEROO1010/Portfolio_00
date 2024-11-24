import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f7f8fa;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #00b894;
    margin: 0 10px;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 All Rights Reserved</p>
      <p>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </p>
    </FooterContainer>
  );
}

import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../assets/white_logo.png';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00b894;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    cursor: pointer;
    color: #333;
    font-weight: 500;
    &:hover {
      color: #00b894;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo><img src={ImageLogo} alt="Description of image" /></Logo>
      <Nav>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

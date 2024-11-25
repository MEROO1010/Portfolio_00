import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  img {
    height: 40px;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  li {
    cursor: pointer;
    color: #333;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: #00b894;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={ImageLogo} alt="Logo" />
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

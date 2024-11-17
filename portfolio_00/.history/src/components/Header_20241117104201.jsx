import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImageLogo from '../assets/white_logo.png';

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin:4px;
  padding-left:40px;
`;

const NavLinks = styled .nav`
  display: flex;
  gap: 60px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #3BB873;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo><img src={ImageLogo} alt="Description of image" /></Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import myImage from '../assets/white_logo';

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`;

const NavLinks = styled .nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo><img src={myImage} alt="Description of image" /></Logo>
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
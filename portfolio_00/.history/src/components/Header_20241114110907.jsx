import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <AboutMe>About me</AboutMe>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #fff;
  display: flex;
  min-height: 3968px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AboutMe = styled.h1`
  color: #3bb873;
  text-align: center;
  align-self: center;
  font: 600 65px/2 Poppins, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

export default Header;
import React from "react";
import styled from "styled-components";

function Footer() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3c06d4f03136cc02a8bd8f02b2a6613eb49ff5297cdc97661470bcebb8444de?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b", alt: "Social Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c462ed259a731a35668023fac9a4913322cad213e621d52b06a6121ae7a40a7?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b", alt: "Social Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/454eb17e3286dd7d0c2759f23461c434e76564f2b790c6b263c1abbd16713299?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b", alt: "Social Icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/688a1834e1e3d3bbda17953da8e23f301aa225be32d9dcac36a1a141d23b12e3?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b", alt: "Social Icon 4" },
  ];

  return (
    <FooterWrapper>
      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/30f78254dfde2553c8027b4a8523e4acb9064d14d7638934d2de6c1dcfa13594?placeholderIfAbsent=true&apiKey=4fc707154c0e46ef9ad690e25632298b" alt="Logo" />
      <SocialIcons>
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
      </SocialIcons>
      <Copyright>© 2023 All rights reserved</Copyright>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 264px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1.24;
  object-fit: contain;
  object-position: center;
  width: 255px;
  max-width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 78px;
  width: 250px;
  max-width: 100%;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 42px;
`;

const Copyright = styled.p`
  color: #000;
  text-align: center;
  margin-top: 60px;
  font: 400 20px Poppins, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Footer;
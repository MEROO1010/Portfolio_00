import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function LandingPage() {
  return (
    <Main>
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  background-color: #fffefb;
  display: flex;
  padding-bottom: 154px;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 991px) {
    padding-bottom: 100px;
  }
`;

export default LandingPage;
import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function LandingPage() {
  return (
    <Main>
      <Header />
      <Navbar/>
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
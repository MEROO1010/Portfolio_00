import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../assets/white_logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your pages
import Home from '../components/Home';
import AboutMe from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

// Styles for the header
const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 80px',
  fontSize:'40px',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  margin: '0 15px',
};

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00b894;
`;

export default function Header() {
  return (
    <Router>
    <header style={headerStyle}>
      <div className="logo" style={logoStyle}>
      <Logo><img src={ImageLogo} alt="Description of image" /></Logo>
      </div>
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About Me</Link></li>
          <li><Link to="/services" style={linkStyle}>Services</Link></li>
          <li><Link to="/portfolio" style={linkStyle}>Portfolio</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

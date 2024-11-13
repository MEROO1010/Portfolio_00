import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">
              M
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
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
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="container">
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="copyright">© 2023 All rights reserved</p>
          </div>
        </footer>
 
      </div>
    </Router>
  );
}

export default App;
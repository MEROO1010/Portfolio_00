import React from 'react';
import styled from 'styled-components';
import BG from '../assets/BG_HomePage.png';





const Hero = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <p className="hello">Hello! I'm</p>
          <h1 className="name">Marwah Alsaggaf</h1>
          <h2 className="title">Graphic Designer & </h2>
          <h2 className="title">Full-stack Developer</h2>
          <div className="social-links">
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa fa-behance"></i>
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <button className="cv-button">CV Here</button>
        </div>
        <div className="right">
          <img src="https://via.placeholder.com/500x500" alt="Keyboard" className="keyboard" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
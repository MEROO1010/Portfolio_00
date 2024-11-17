import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Router>
      
      <Header />
      <Hero
      <Routes>
        <Route path="/" exact component={Hero} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer  from './Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

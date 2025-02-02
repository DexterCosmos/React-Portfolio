import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes> {/* Define Routes for each page */}
      <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/hero" element={<Hero />} /> {/* Hero route */}
        <Route path="/services" element={<Services />} /> {/* Services route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/projects" element={<Projects />} /> {/* Projects route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

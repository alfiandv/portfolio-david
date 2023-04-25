import React from 'react';

import Navbar from '../component/landingpage/Navbar';
import Hero from '../component/landingpage/Hero';
import AboutMe from '../component/landingpage/AboutMe';
import Skills from '../component/landingpage/Skills';
import AcademicHistory from '../component/landingpage/AcademicHistory';
import Portfolio from '../component/landingpage/Portfolio';
import ContactMe from '../component/landingpage/ContactMe';

const Home = () => {
    return (
      <div> 
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <AcademicHistory />
      <Portfolio />
      <ContactMe />
      </div>
    );
  }
  
  export default Home;
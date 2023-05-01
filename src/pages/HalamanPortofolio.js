import React from 'react';

import Banner from '../component/portfolio1/Banner';
import Pembukaan from '../component/portfolio1/Pembukaan';
import Proses from '../component/portfolio1/Proses';
import Desainmvp from '../component/portfolio1/Desainmvp';
import Penutup from '../component/portfolio1/Penutup';
import Footer from '../component/portfolio1/Footer';

const HalamanPortfolio = () => {
    return (
      <div className="min-w-screen"> 
        <Banner />
        <Pembukaan />
        <Proses />
        <Desainmvp />
        <Penutup />
        <Footer />
      </div>
    );
  }
  
  export default HalamanPortfolio;
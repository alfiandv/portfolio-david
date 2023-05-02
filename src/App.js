import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import HalamanPortfolio from './pages/HalamanPortofolio';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<HalamanPortfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

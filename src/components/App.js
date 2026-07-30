import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>React Router Navigation</h1>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

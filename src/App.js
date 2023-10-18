import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AppsPage from './components/AppsPage';
import BrowserGamePage from './components/BrowserGamePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/browser-game" element={<BrowserGamePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add routes for other pages as you create them */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

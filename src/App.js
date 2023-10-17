import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AppPage from "./pages/AppPage";
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    document.title = "Apps by Tom";
  }, []);

  return (
    <div className="App">
      <NavbarComponent />
      <Hero />
      {/* Rest of your components */}
    </div>
  );
}

export default App;

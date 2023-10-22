import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/CustomNavbar';
import './global.css';
import timesTableIcon from './assets/timesTableIcon.png';
import juliaZoneIcon from './assets/juliaZoneIcon.jpg';
import BrowserGameIcon from './assets/gameScreenshot1.png';
import TimestheTimesTablesPrivacyPolicy from './TimestheTimesTablesPrivacyPolicy';
import TheJuliaZonePrivacyPolicy from './TheJuliaZonePrivacyPolicy';

function App() {
  return (
    <Router>
    <div className="bg-black">
      <CustomNavbar />

      <Routes>

      <Route path="/" element={

      <Container className="my-5 text-white">
        
        {/* Home Section */}
        <h2 className="text-red">Tom's Simple Apps</h2>
        <p>Welcome to Our Platform! This is a platform where you can discover incredible mobile apps and an exciting browser game.</p>

        {/* Apps Section */}
        <h2 className="text-red">Mobile Apps</h2>
        <Row>
          <Col md={6}>
            <h3>Times the Times Tables</h3>
            <img src={timesTableIcon} alt="Times the Times Tables Icon" className="app-icon" />
            <p>Practice your times tables here. Get a high score! Brag to your friends!</p>
            <p>For kids: Best score gets a cookie!</p>
            <p>For Adults: Low score does a shot!</p>
            <Link to="/times-the-times-tables-privacy-policy"> Privacy Policy</Link>
          </Col>
        <Row>
        </Row>
          <Col md={6}>
            <h3>The Julia Zone</h3>
            <img src={juliaZoneIcon} alt="The Julia Zone Icon" className="app-icon" />
            <p>White noise generator.</p>
            <p>Change the "shape" of the white noise for maximum relaxation.</p>
            <Link to="/the-julia=zone-privacy-policy"> Privacy Policy</Link>
          </Col>
        </Row>

        {/* Browser Game Section */}
        <h2 className="text-red">Browser Game</h2>
        <img src={BrowserGameIcon} alt="Browser Game Icon" className="app-icon" />
        <p>Coming soon.</p>

        {/* About Section */}
        <h2 className="text-red">About</h2>
        <p>Brag page for Tom. Contact for details.</p>
        <br />
      </Container>
                } exact />

        <Route path="/times-the-times-tables-privacy-policy" element={<TimestheTimesTablesPrivacyPolicy />} />
        <Route path="/the-julia=zone-privacy-policy" element={<TheJuliaZonePrivacyPolicy />} />
      </Routes>

    </div>
    </Router>

  );
}

export default App;

import React from 'react';
import { Button } from 'react-bootstrap';
import './Hero.css';

import app1Logo from '../../assets/juliaZoneIcon.jpg';
import app2Logo from '../../assets/timesTableIcon.png';
import app1Screenshot from '../../assets/juliaZoneScreenshot1.png';
import app2Screenshot from '../../assets/timesTablesScreenshot1.png';

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to the App Showcase</h1>
      <p>The best apps for your needs.</p>
      <p>No ads. No registration. No tracking. Just apps.</p>

      <div className="app-display">
        <div className="app-item">
          <img src={app1Logo} alt="App 1 Logo" className="app-logo" />
          <img src={app1Screenshot} alt="App 1 Screenshot" className="app-screenshot" />
          <Button variant="primary" href="#app1-details">Learn More</Button>
        </div>

        <div className="app-item">
          <img src={app2Logo} alt="App 2 Logo" className="app-logo" />
          <img src={app2Screenshot} alt="App 2 Screenshot" className="app-screenshot" />
          <Button variant="primary" href="#app2-details">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
export default Hero;

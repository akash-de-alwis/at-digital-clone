import React from 'react';
import { Button } from 'react-bootstrap';
import heroImg from '../assets/hero.png';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <img src={heroImg} alt="Hero" className="hero-image" />
      <div className="hero-content">
        <h2>
          We Crush Your<br />
          Competitors, Goals, And<br />
          Sales Records – Without<br />
          The B.S.
        </h2>
        <Button className="consult-btn">GET FREE CONSULTATION</Button>
      </div>
    </div>
  );
}

export default Hero;

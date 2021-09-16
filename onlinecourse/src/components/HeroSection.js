import React from 'react';
import '../App.css';
import { LinkContainer } from "react-router-bootstrap"
import { Button } from "react-bootstrap";
import '../css/HeroSection.css';


const HeroSection = () => {
    return (
    <div className='hero-container'>
      <h1>Crash Course</h1>
      <p>Learn about the middle east from the most educated people</p>
      <div className='hero-btns'>
        <LinkContainer to="/course">
          <Button variant="success" className="btn-lg">
            GET STARTED <i class="fas fa-graduation-cap"></i>
          </Button>   
        </LinkContainer>
      </div>
    </div>
  );
}

export default HeroSection
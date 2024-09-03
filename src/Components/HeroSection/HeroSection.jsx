import React from 'react';
import './HeroSection.css';
import Carousel from 'react-bootstrap/Carousel';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item className="carousel-item1 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column align-items-start justify-content-center">
            <h1 className="text-capitalize text-start">Find your perfect holiday</h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae blanditiis assumenda laboriosam id error minus esse odio cumque quod!
            </p>
            <GreenBtn btnTitle="Check our holidays" btnLink="/holidays" />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item2 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column align-items-start justify-content-center">
            <h1 className="text-capitalize text-start">Do you need a city break?</h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit totam nam consectetur vel praesentium eligendi?
            </p>
            <GreenBtn btnTitle="Our city breaks" btnLink="/city-breaks" />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-item3 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column align-items-end justify-content-center">
            <h1 className="text-capitalize text-start">Travel anywhere</h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae blanditiis assumenda laboriosam id error minus esse odio cumque quod!
            </p>
            <GreenBtn btnTitle="Check all destinations" btnLink="/destinations" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;

import React, { Component } from 'react';
import '../styles/Carousel.scss';
import planetData from '../assets/json/planets.json';
import { CarouselItem }  from './carousel-item.js';

class Carousel extends Component {
  render() {
    const planets = planetData.map(data => {
      return <CarouselItem key={data.id} planet={data} />
    });
    return <div className="carousel-container">
      <div className="carousel">
        {planets}
      </div>
    </div>
  }
}
  
export default Carousel;
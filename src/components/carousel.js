import React, { Component } from 'react';
import '../styles/Carousel.scss';
import planetData from '../assets/json/planets.json';
import { CarouselItem }  from './carousel-item.js';

class Carousel extends Component {
  activateLeftSlider = () => {
    this.refs.carousel.scrollLeft -= 300;
  }
  activateRightSlider = () => {
    this.refs.carousel.scrollLeft += 300;
  }
  render() {
    const planets = planetData.map(data => {
      return <CarouselItem id={data.id} key={data.id} planet={data} />
    });
    return <div className="carousel-container">
      <div className="carousel" ref="carousel"ref="carousel">
        {planets}
      </div>
      <div className="carousel-links">
        <div onClick={() => this.activateLeftSlider()}>
          <span class="chevron left"></span>
        </div>
        <div onClick={() => this.activateRightSlider()}>
          <span class="chevron right"></span>
        </div>
      </div>
    </div>
  }
}
  
export default Carousel;
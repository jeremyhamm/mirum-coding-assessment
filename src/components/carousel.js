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
        <img onClick={() => this.activateLeftSlider()} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTQuMTkgMTYuMDA1bDcuODY5IDcuODY4LTIuMTI5IDIuMTI5LTkuOTk2LTkuOTk3TDE5LjkzNyA2LjAwMmwyLjEyNyAyLjEyOXoiLz48L3N2Zz4='/>
        <img onClick={() => this.activateRightSlider()} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMTguNjI5IDE1Ljk5N2wtNy4wODMtNy4wODFMMTMuNDYyIDdsOC45OTcgOC45OTdMMTMuNDU3IDI1bC0xLjkxNi0xLjkxNnoiLz48L3N2Zz4='/>
      </div>
    </div>
  }
}
  
export default Carousel;
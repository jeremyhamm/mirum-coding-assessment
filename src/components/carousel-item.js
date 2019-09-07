import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/Carousel-Item.scss';

const PlanetItem = (props) => {
  return(
    <div className="carousel-item">
      {props.children}
    </div>
  )
}

const Image = (props) => {
  return(
    <Link to={`/details/${props.data}`}>
      <img src={process.env.REACT_APP_PUBLIC_URL + '/images/thumbnails/' + props.data + '.jpg'} alt="Planet" className="thumbnail" height="250" width="250"></img>
    </Link>
  )
}

const Name = (props) => {
  return(
    <p>{props.data}</p>
  )
}

const CarouselItem = (props) => {
  return(
    <PlanetItem>
      <Image data={props.planet.name}/>
      <Name data={props.planet.name} />
    </PlanetItem>
  )
}

export { CarouselItem }
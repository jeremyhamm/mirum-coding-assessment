import React from 'react';
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
    <img src={process.env.REACT_APP_PUBLIC_URL + '/images/' + props.data + '.jpg'} alt="Planet" className="thumbnail" height="250" width="250"></img>
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
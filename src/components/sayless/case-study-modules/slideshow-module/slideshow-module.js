import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useTransition, animated } from 'react-spring'
import './slideshow-module.css';
import numericalSlideshow from './numerical-slideshow/numerical-slideshow';
import dragSlideshow from './drag-slideshow/drag-slideshow';

export default ({ props }) => {
  console.log(props, "yo yo yo yo");
  if (props.slideshowType === "A") {
        // create numerical slideshow 
    const images = props.images.map(({ fluid }, key) => {
      return ({ style }) =>
        <animated.div className="slideshow-container" style={{ ...style, position: 'relative' }}>
          <Img fluid={fluid} />
        </animated.div>
    });

    return (
      <React.Fragment>
        {numericalSlideshow(images)}
      </React.Fragment>
    )
  } else {
    
   }
}



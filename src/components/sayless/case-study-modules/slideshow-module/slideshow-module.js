import React, { useState } from 'react'
import Img from 'gatsby-image'
import { useTransition, animated } from 'react-spring'
import './slideshow-module.css';
import numericalSlideshow from './numerical-slideshow/numerical-slideshow';
import dragSlideshow from './drag-slideshow/drag-slideshow';

export default ({ props }) => {
    if(props.images) {
    const images = props.images.map(({ fluid }, key) => {
      return ({ style }) =>
        <animated.div className="slideshow-container" style={{ ...style, position: 'relative' }}>
          <Img fluid={ {...fluid, aspectRatio: 16/9 }} />
        </animated.div>
    });

    return (
      <React.Fragment>
        {numericalSlideshow(images)}
      </React.Fragment>
    )
  } else {
    return null;
   }
}



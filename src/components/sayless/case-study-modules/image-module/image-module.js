import React from 'react'
import Img from 'gatsby-image'

export default ({props}) => {
  let content;
  if (props.images.length > 1){
    content = generateTwoImages(props);
  } else {
    content = generateOneImage(props);
  }


  return (
  <div className="image-wrapper">
    {content}
  </div>
)}


const generateOneImage = (props) => {
  const fluid = props.images[0].fluid;
  return (
  <div className="one-img-module"> 
    <Img fluid={fluid} />
  </div>
  )
}


const generateTwoImages = (props) => {
  const images = props.images.map(image => {
    const fluid = image.fluid;
    console.log(fluid);
    return (
      <Img fluid={fluid} />
    );
  });

  return (
  <div className="two-img-module"> 
    {images}
  </div>
  )
};

// const leftAlign;

// const rightAlign;
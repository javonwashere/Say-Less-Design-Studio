import React from 'react'
import Img from 'gatsby-image'
import "../modules.css"

export default ({props}) => {
  let content;
  if (props.images.length > 1){
    content = generateTwoImages(props);
  } else {
    content = generateOneImage(props);
  }


  return (
      <React.Fragment>
    {content}
      </React.Fragment>
)}


const generateOneImage = (props) => {
  const fluid = props.images[0].fluid;
  const rightPadding = "2vw";
  const leftPadding = "2vw";
  const width = 100;
  const position = props.alignment.toLowerCase();
  const styles = {
    width: `${width}%`,
    justifySelf: position,
  };

  return (
    <Img className="one-img-wrapper" style={styles} fluid={fluid} />
  )
}


function getNonFeaturedImagePosition(nonFeaturedImagePosition) {
  let position;
  switch (nonFeaturedImagePosition) {
    case "Top":
      position = "flex-start";
      break;
    case "Center":
      position = "center";
      break;
    case "Bottom":
      position = "flex-end";
      break;
    default:
      position = "";
  }
  return position;
}

const generateTwoImages = (props) => {

  const nonFeaturedImagePosition = props.nonFeaturedImagePosition;

  let position = getNonFeaturedImagePosition(nonFeaturedImagePosition);
  const featured = props.featuredImage === true ? "left" : "right";

  console.log("tell tale,", props.featuredImage)

  const alignment = props.alignment;
  let imageWrapper;
  switch(alignment){
    case "Left":
      imageWrapper = leftAlignImages(props, position, featured);
      break;
    case "Right":
      imageWrapper = rightAlignImages(props, position, featured);
      break;
    default:
      imageWrapper = centerAlignImages(props);
      break;

  }

  return (
      <React.Fragment>
      {imageWrapper}
      </React.Fragment>
  )
};

const centerAlignImages = (props) => {
  const fluidLeft = props.images[0].fluid;
  const fluidRight = props.images[1].fluid;

  const leftPadding = "2vw";
  const width = 100;
  const position = "center";

  const styles = {
    width: `${width}%`,
    alignSelf: position,
  };


  return(
      <div className="two-img-wrapper" style={styles}>
        <Img className="left-img" fluid={fluidLeft} />
        <Img className="right-img" fluid={fluidRight} />
      </div>
  )
}



const leftAlignImages = (props, position, featured) => {
  const fluidLeft = props.images[0].fluid;
  const fluidRight = props.images[1].fluid;
  console.log(props)

  const styleLeft = featured === "left" ? "125%" : "%50";
  const styleRight = featured === "right" ? "125%" : "%50";

  return(
      <div className="two-img-wrapper full-width">
        <Img className="left-img" fluid={fluidLeft} style={{ width: styleLeft }} />
        <Img className="right-img" fluid={fluidRight} style={{marginRight: "10vw", alignSelf: position, width: styleRight }} />
      </div>
  )
}

const rightAlignImages = (props, position, featured) => {
  const fluidLeft = props.images[0].fluid;
  const fluidRight = props.images[1].fluid;

  const styleLeft = featured === "left" ? "125%" : "%50";
  const styleRight = featured === "right" ? "125%" : "%50";

  return(
      <div className="two-img-wrapper full-width">
        <Img className="left-img" fluid={fluidLeft} style={{marginLeft: "10vw", alignSelf: position, width: styleLeft }} />
        <Img className="right-img" fluid={fluidRight} style={{width: styleRight}}/>
      </div>
  )
}

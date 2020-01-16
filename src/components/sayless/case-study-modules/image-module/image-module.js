import React from 'react'
import Img from 'gatsby-image'
import "../modules.css"

export default ({ props }) => {
  let content;
  if (props.images.length > 1) {
    content = generateTwoImages(props);
  } else {
    content = generateOneImage(props);
  }


  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

const defineAspectRatio = (prop) => {
  if (!!prop) {
    const ratio = prop.split(":");
    return (ratio[0] / ratio[1]);
  }
  return null
}


const generateOneImage = (props) => {
  const aspectRatio = defineAspectRatio(props.aspectRatio);

  const fluid = props.images[0].fluid;
  let alignment = getImagePosition(props.alignment);
  const width = !!props.width ? props.width : 100;

  const styles = {
    width: `${width}%`,
    alignSelf: alignment,
  };

  const imageProperties = () => {
    if (!!aspectRatio) {
      return { ...fluid, aspectRatio }
    } else return { ...fluid }
  }

  return (
    <Img className="one-img-wrapper" style={styles} fluid={imageProperties()} />
  )
}


function getImagePosition(imagePosition) {
  let position;
  switch (imagePosition) {
    case "Top":
    case "Left":
      position = "flex-start";
      break;
    case "Center":
      position = "center";
      break;
    case "Bottom":
    case "Right":
      position = "flex-end";
      break;
    default:
      position = "";
  }
  return position;
}

const generateTwoImages = (props) => {


  const nonFeaturedImagePosition = props.nonFeaturedImagePosition;

  let position = getImagePosition(nonFeaturedImagePosition);
  const featured = props.featuredImage === true ? "left" : "right";


  const alignment = props.alignment;
  let imageWrapper;
  switch (alignment) {
    case "Left":
      imageWrapper = leftAlignImages(props, position, featured);
      break;
    case "Right":
      imageWrapper = rightAlignImages(props, position, featured);
      break;
    case "Center":
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

  const width = 100;
  const position = "center";

  const styles = {
    width: `${width}%`,
    alignSelf: position,
  };


  return (
    <div className="two-img-wrapper" style={styles}>
      <Img className="left-img" fluid={fluidLeft} />
      <Img className="right-img" fluid={fluidRight} />
    </div>
  )
}



const leftAlignImages = (props, position, featured) => {
  const fluidLeft = props.images[0].fluid;
  const fluidRight = props.images[1].fluid;

  const styleLeft = featured === "left" ? "125%" : "%50";
  const styleRight = featured === "right" ? "125%" : "%50";

  const aspectRatio = defineAspectRatio(props.aspectRatio);

  const imageProperties = (fluidImg) => {
    if (!!aspectRatio) {
      return { ...fluidImg, aspectRatio }
    } else return { ...fluidImg }
  }

  return (
    <div className="two-img-wrapper full-width">
      <Img className="left-img" fluid={imageProperties(fluidLeft)} style={{ width: styleLeft }} />
      <Img className="right-img" fluid={imageProperties(fluidRight)} style={{ marginRight: "10vw", alignSelf: position, width: styleRight }} />
    </div>
  )
}

const rightAlignImages = (props, position, featured) => {
  const fluidLeft = props.images[0].fluid;
  const fluidRight = props.images[1].fluid;

  const styleLeft = featured === "left" ? "125%" : "%50";
  const styleRight = featured === "right" ? "125%" : "%50";

  const aspectRatio = defineAspectRatio(props.aspectRatio);

  const imageProperties = (fluidImg) => {
    if (!!aspectRatio) {
      return { ...fluidImg, aspectRatio }
    } else return { ...fluidImg }
  }

  return (
    <div className="two-img-wrapper full-width">
      <Img className="left-img" fluid={imageProperties(fluidLeft)} style={{ marginLeft: "10vw", alignSelf: position, width: styleLeft }} />
      <Img className="right-img" fluid={imageProperties(fluidRight)} style={{ width: styleRight }} />
    </div>
  )
}

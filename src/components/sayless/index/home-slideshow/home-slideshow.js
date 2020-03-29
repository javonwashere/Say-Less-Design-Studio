import React, { useRef, useState, useEffect } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { useTransition, animated } from 'react-spring'
import './home-slideshow.css'
import { StaticQuery } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        const allFeaturedWorks = data.allContentfulFeaturedWorks.edges[0].node;
        const images = allFeaturedWorks.collectionOfWorks.map(({ slug, featuredImage }, key) => {
          return ({ style }) =>
            <animated.div className="slideshow-container" style={{ ...style, position: 'relative' }}>
              <Link style={{ textDecoration: 'none' }} id={key} to={`/work/${slug}`}><Img fluid={{...featuredImage.fluid, aspectRatio: 16/9 }} /></Link>
            </animated.div>
        });
        return slideShow(images);
      }}
    />
  )
}

const numbers = (images, setIndex) => {

  const [lastNumber, setLastNumber] = useState(0);

  const setNav = (index) => {
    setLastNumber(index);
    setIndex(index);
  }

  const numbersRow = images.map((image, index) => {
    return (
      <React.Fragment>
        <div className="navbar-index-number" onClick={() => setNav(index)}>{index + 1}</div>
        <div className="navbar-rule-container">
          {index === lastNumber ?
            <div className="navbar-rule-active" /> :
            <div className="navbar-rule-dormant" />}
        </div>
      </React.Fragment>
    );
  })

  return (
    <React.Fragment>
    <div className="navbar-numbers-row">
    {numbersRow}
    </div>
    <div className="navbar-prev-next">
        {lastNumber != 0 && 
        <div className="navbar-prev" 
        onClick={() => setNav(lastNumber - 1)}>PREV</div>}
        {lastNumber != images.length - 1 && 
        <div className="navbar-next"
        onClick={() => setNav(lastNumber + 1)}>NEXT</div>}
    </div>
    </React.Fragment>
  )
};

const paginationRows = (images, setIndex) => {

  return (
    <div className="navigation-slideshow">
      <div className="navigation-numbers-wrapper">
      </div>
      <div className="navigation-pagination">
        {numbers(images, setIndex)}
      </div>
    </div>
  )
}



const slideShow = (images) => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, p => p, {
    leave: { opacity: 0 },
  });
  return (
    <div className="slideshow-wrapper">
      {transitions.map(({ item, props, key }) => {
        const Image = images[item];
        return <Image key={key} style={props} />
      })}
      {paginationRows(images, setIndex)}
    </div>
  )
}


export const pageQuery = graphql`
  {
    allContentfulFeaturedWorks {
        edges {
          node {
            title
            collectionOfWorks {
                client
                slug
              featuredImage {
                fluid(
                  maxHeight: 500, quality: 70
                ) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `

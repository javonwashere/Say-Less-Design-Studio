import React, { useRef, useState, useEffect } from 'react'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'


import './featured-works.css'
import { StaticQuery } from 'gatsby'

export default () => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const allFeaturedWorks = data.allContentfulFeaturedWorks.edges[0].node;
        return featuredWorks(allFeaturedWorks);
      }}
    />
  )
}


const featuredWorks = (data) => {
  const { title, collectionOfWorks } = data;
  const featuredWorksTable = works(collectionOfWorks);

  return (
    <div className="feat-banner">
      <div className="feat-container">
        <div className="feat-wrapper">
          <div className="feat-header">
            <h4>{title.toUpperCase()}</h4>
          </div>
          {featuredWorksTable}
          <div className="feat-more-works">
            <h4><Link to={`/work`}>See More</Link></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

const works = (collectionOfWorks) => {
  const imageContainer = useRef();
  const imagesArray = [];
  // console.log(collectionOfWorks)
  const workRows = collectionOfWorks.map(({ client, slug, featuredImage }, key) => {
    const indexNumber = (key + 1).toString().length > 1 ? key + 1 : `0${key + 1}`;
    // console.log(client, indexNumber, featuredImage);
    // todo: add on hover event listener
    imagesArray.push({ key, featuredImage });
    return (
      <div className="work-row" id={key}>
        <div className="work-client" id={key}><Link style={{ textDecoration: 'none' }} id={key} to={`/work/${slug}`}>{client}</Link></div>
        <div className="work-index" id={key}>{indexNumber}</div>
      </div>
    )
  })


  const [index, setIndex] = useState(0);

  useEffect(() => {
    imageContainer.current.addEventListener('mousemove', function (event) {
      let indexNumber = event.target.id;
      if (index != indexNumber) {
        setIndex(indexNumber)
      }
    }, null);
  })

  return (
    <div className="feat-table">
      <div className="work-rows" ref={imageContainer}>
        {imagesArray[index] && <Img style={{ width: '50% !important', height: 'auto' }} className="work-image" fluid={imagesArray[index].featuredImage} />}
        {workRows}
      </div>
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
                  ...GatsbyContentfulFluid 
                }
              }
            }
          }
        }
      }
    }
  `

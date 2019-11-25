import React from 'react'
import Img from 'gatsby-image'

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
)}


const featuredWorks = (data) => {
    const {title, collectionOfWorks} = data;
    console.log("AYOO!!", collectionOfWorks);
    const featuredWorksTable = works(collectionOfWorks);
    
  return(
    <div className="feat-container">
      <div className="feat-wrapper">
        <div className="feat-header">
          <h4>{title.toUpperCase()}</h4>
        </div>
        {featuredWorksTable}
      </div>
    </div>
  )
}

const works = (collectionOfWorks) => {
    const workRows = collectionOfWorks.map(({client, featuredImage}, key) => {
        const indexNumber = (key+1).toString().length > 1 ? key + 1 : `0${key + 1}`;
        console.log(client, indexNumber);
        return (
            <div className="work-row">
                <div className="work-client">{client}</div>
                <div className="work-index">{indexNumber}</div>
            </div>
        )
    })
    return(
        <div className="feat-table">
            {workRows}
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
              featuredImage {
                fluid(maxHeight: 1180, maxWidth: 480) {
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `

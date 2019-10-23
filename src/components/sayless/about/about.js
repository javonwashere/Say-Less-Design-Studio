import React from 'react'
import Img from 'gatsby-image'
import People from './people'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import ReactDOM from "react-dom";
import styles from './about.css'






// Static Query needed to fetch data from this component specifically
export default () =>  {
  return (
    <StaticQuery
        query={pageQuery}
        render={data => {
          return aboutMeParentComponent(data);
        }}
    />
)}




const aboutMeParentComponent = (data) => {
  const aboutUsTitle = data.allContentfulAbout.edges[0].node.title
  const aboutUsDescription = data.allContentfulAbout.edges[0].node.aboutUsDescription.aboutUsDescription
  const aboutUsCapabilities = data.allContentfulAbout.edges[0].node.childContentfulAboutCapabilitiesRichTextNode.json
  const aboutUsPeople = data.allContentfulPerson.edges;
  return (
      <div className="wrapper">
        <h1 className="about-title">{aboutUsTitle}</h1>
        <p className="about-description">{aboutUsDescription}</p>
        <div className="video-container">video container</div>
        <div>{addStylingToCapabilities(aboutUsCapabilities)}</div>
        <hr/>
        <People className="about-people" people={aboutUsPeople}/>
      </div>
  )
}

const addStylingToCapabilities = (data) => {

  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => <ul className="about-capabilities-ul">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="about-capabilities-li">{children}</li>,
    },
  };
      console.log("capabilities", data);
  return documentToReactComponents(data, options)
}




export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
   allContentfulAbout {
    edges {
      node {
        title
        aboutUsDescription {
          aboutUsDescription
        }
        childContentfulAboutCapabilitiesRichTextNode {
          json
           content {
            content {
              value
              nodeType
            }
          }
        }
      }
    }
  }
    allContentfulPerson {
      edges {
        node {
          name
          email
          instagram
          website
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 500
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

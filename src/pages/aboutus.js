import React from 'react'
import Img from 'gatsby-image'
import People from '../components/sayless/about/people'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import Layout from "../components/layout";




class AboutUs extends React.Component {
// Static Query needed to fetch data from this component specifically
  render() {


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


    return (
        <Layout location={this.props.location} >
          <div style={{ background: '#fff' }}>

          <StaticQuery
            query={pageQuery}
            render={data => {
              return aboutMeParentComponent(data);
            }}
        />
          </div>
        </Layout>
    )
  }
}

export default AboutUs;



export const pageQuery = graphql`
  query aboutQuery {
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

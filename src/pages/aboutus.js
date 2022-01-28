import React from 'react'
import People from '../components/sayless/about/people'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../components/layout";
import Header from "../components/sayless/header/header"




class AboutUs extends React.Component {
  // Static Query needed to fetch data from this component specifically
  render() {


    const aboutMeParentComponent = (data) => {
      const aboutUsTitle = data.allContentfulAbout.edges[0].node.title
      const aboutUsVideo = data.allContentfulAbout.edges[0].node.videoUpload
      const aboutUsDescription = data.allContentfulAbout.edges[0].node.aboutUsDescription.aboutUsDescription
      const aboutUsCapabilities = data.allContentfulAbout.edges[0].node.capabilities.raw
      const aboutUsPeople = data.allContentfulPerson.edges;

      return (
        <div className="wrapper">
          <Header headerText={aboutUsTitle.replace("*", "\n")} noFade />
          <p className="about-description">{aboutUsDescription}</p>
          <div className="video-container">
            <video className="video-body" controls autoPlay playsInline loop preload="metadata">
              <source src={aboutUsVideo.file.url} type={aboutUsVideo.file.contentType} />
            </video>
          </div>
          <div className="about-capabilities-wrapper">
          {addStylingToCapabilities(aboutUsCapabilities)}
          </div>
          <hr />
          <People className="about-people" people={aboutUsPeople} />
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
      return documentToReactComponents(JSON.parse(data), options)
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
        videoUpload {
          id
          file {
            url
            fileName
            contentType
          }
        }
        capabilities {
          raw
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

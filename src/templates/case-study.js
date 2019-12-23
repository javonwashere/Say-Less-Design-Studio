import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import './case-study.css';
import './services.css';
import Modules from '../components/sayless/case-study-modules/modules'

class CaseStudy extends React.Component {
  render() {
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const caseStudy = get(this.props, 'data.contentfulCaseStudy')
    console.log(caseStudy, "YO")
    const { client, services, story, heroImage, modules } = caseStudy;
    const paragraphs = story.story;
    return (
      <Layout location={this.props.location} >
        <div className="case-study-wrapper" style={{ background: '#fff' }}>
          <div className="hero-image">
            <Img alt="" fluid={heroImage.fluid} />
          </div>
          <div className="client-info-wrapper">
            <div className="client-info-container">
              <div className="client-column-left">
                <div className="client">
                  <h4 className="client-info-header">CLIENT</h4>
                  <p className="client-info-details">{client}</p>
                </div>
                <div className="services">
                  <h4 className="client-info-header">SERVICES</h4>
                  {generateServices(services)}
                </div>
              </div>
              <div className="client-column-right">
                <div className="story">
                  <h4 className="client-info-header">STORY</h4>
                  {constructPars(story)}
                </div>
              </div>
            </div>
            {modules && <Modules props={modules} />}
          </div>
        </div>
      </Layout>
    )
  }
}

const constructPars = (story) => {
  console.log("p", paragraphs);
  const boldRegex = /(\_{2})([^_]+)(\_{2})/g;
  const paragraphs = story.story;
  const convertBoldCharacters =
    (match, p1, p2, p3, offset, string) => {
      return `<strong>${p2}</strong>`;
    }
  const constructedParagraphs = paragraphs
    .replace(boldRegex, convertBoldCharacters)
    .split("\n\n");
  return constructedParagraphs.map(p =>
    <p
      className="client-info-text"
      dangerouslySetInnerHTML={{ __html: p }}
    />
  )
}

const generateServices = (services) => {
  const serviceTypes = Object.entries(services).filter(service => service[1] != null);
  const serviceListGroups = serviceTypes.map((serviceType, index) => {
    const service = serviceType[0].replace(/([A-Z])/g, ' $1').trim().toUpperCase();
    const serviceCategories = serviceType[1].map(category => {
      const categoryItems = serviceType[1].length != 0 ?
        <li className="client-info-category">{category}</li> : <li></li>;
      return (
        <React.Fragment>
          {categoryItems}
        </React.Fragment>
      )
    })

    return (
      <React.Fragment>
        <li className="client-info-details">{service} +
          <ul>{serviceCategories}</ul>
        </li>
      </React.Fragment>
    )
  })
  return <ul className="client-info-services-list">{serviceListGroups}</ul>;
}







export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCaseStudy(slug: { eq: $slug }) {
      client
      story {
        story
      }
      services {
        branding
        printDesign
        digitalDesign
      }
      modules {
        ... on ContentfulImage {
          id
          internal {
            type
          }
          images {
            fluid(
              maxWidth: 1000, quality: 80
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          alignment
          featuredImage
          nonFeaturedImagePosition
        }
        ... on ContentfulImageSlideshow {
          id
          internal {
            type
          }
          images {
            fluid(
              maxWidth: 1000, quality: 80
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          slideshowType
        }
        ... on ContentfulTextBox {
          id
          internal {
            type
          }
          text {
          text
          }
          type
        }
      }
      heroImage {
        fluid(
          maxWidth: 1000, quality: 80
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      slug
    }
  }
`

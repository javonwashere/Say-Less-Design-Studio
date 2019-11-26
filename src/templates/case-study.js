import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import './case-study.css';
import Modules from '../components/sayless/case-study-modules/Modules'

class CaseStudy extends React.Component {
  render() {
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const caseStudy = get(this.props, 'data.contentfulCaseStudy')
    console.log(caseStudy, "YO")
    const { client, services, story, heroImage, modules } = caseStudy;
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
                  <p className="client-info-text">{story.story}</p>
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

const generateServices = (services) => {
  let allServices = services.map((service, index) => {
    return (<p className="client-info-details" key={index}>{service}</p>)
  })

  return allServices;
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
      services

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
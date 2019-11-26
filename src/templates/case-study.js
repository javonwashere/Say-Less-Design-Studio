import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'

class CaseStudy extends React.Component {
  render() {
    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const caseStudy = get(this.props, 'data.contentfulCaseStudy')
    console.log(caseStudy)
    const { client, services, story, heroImage } = caseStudy;

    return (
      <Layout location={this.props.location} >
        <div className="case-study-wrapper" style={{ background: '#fff' }}>
          <div className="hero-image">
            <Img alt="" fluid={heroImage.fluid} />
          </div>
          <div className="client-info-container">
            <div className="client-column-left">
              <div className="client">
                {client}
              </div>
              <div className="services">
                {services[0]}
              </div>
              <div className="client-column-right">
                <div className="story">
                  {story.story}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
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
        }
        ... on ContentfulImageSlideshow {
          id
        }
        ... on ContentfulTextBox {
          id
        }
      }
      heroImage {
        fluid(
          maxWidth: 1000, quality: 100
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      slug
    }
  }
`
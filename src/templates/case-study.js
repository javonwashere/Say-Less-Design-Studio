import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import './case-study.css';
import './services.css';
import Modules from '../components/sayless/case-study-modules/modules'

class CaseStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  render() {
    const constructPars = (story) => {
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
      let showList = this.state.isToggled;
      const toggleList = (e) => {
        this.setState({
          isToggled: !showList
        })
      };
      const serviceTypes = Object.entries(services).filter(service => service[1] != null);
      const serviceListGroups = serviceTypes.map((serviceType, index) => {
        const service = serviceType[0].replace(/([A-Z])/g, ' $1').trim();
        const serviceCapped = service.charAt(0).toUpperCase() + service.slice(1)
        const serviceCategories = serviceType[1].map(category => {
          const categoryItems = serviceType[1].length != 0 ?
            <li className="client-info-category"><span>{category}</span></li> : <li></li>;
          return (
            <React.Fragment>
              {categoryItems}
            </React.Fragment>
          )
        })

        return (
          <React.Fragment>
            <li className={`client-info-details`} onClick={toggleList}>{serviceCapped}{" +"}
              {this.state.isToggled && <ul>{serviceCategories}</ul>}
            </li>
          </React.Fragment>
        )
      })
      return <ul className="client-info-services-list">{serviceListGroups}</ul>;
    }

    // const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const caseStudy = get(this.props, 'data.contentfulCaseStudy')
    const { client, story, heroImage, services, modules } = caseStudy;
    return (
      <Layout location={this.props.location} >
        <div className="case-study-wrapper" style={{ background: '#fff', marginBottom: '6vh' }}>
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
                  {services != null ? generateServices(caseStudy.services) : ""}
                </div>
              </div>
              <div className="client-column-right">
                <div className="story">
                  <h4 className="client-info-header">STORY</h4>
                  {constructPars(story)}
                </div>
              </div>
            </div>
            {modules != null && <Modules props={caseStudy.modules} name={client} />}
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
      services {
        branding
        printDesign
        digitalDesign
      }
      modules {
        ... on Node {
        ... on ContentfulImage {
          id
          internal {
            type
          }
          images {
            fluid(
              maxWidth: 1000, quality: 80
            ) {
              ...GatsbyContentfulFluid 
            }
          }
          aspectRatio
          width
          alignment
          featuredImage
          nonFeaturedImagePosition
        }
        ... on ContentfulVideo {
          id
          internal {
            type
          }
          mute
          autoPlay
          video {
            file {
              url
              fileName
              contentType
            }
          }
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
              ...GatsbyContentfulFluid 
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
    }
      heroImage {
        fluid(
          maxWidth: 1000, quality: 80
        ) {
          ...GatsbyContentfulFluid 
        }
      }
      slug
    }
  }
`

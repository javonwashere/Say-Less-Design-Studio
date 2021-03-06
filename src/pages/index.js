import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Header from '../components/sayless/header/header'
import Landing from '../components/sayless/landing/landing'
import Specialties from '../components/sayless/index/specialties/specialties'
import FeaturedWorks from '../components/sayless/index/featured-works/featured-works'
import HomeSlideshow from '../components/sayless/index/home-slideshow/home-slideshow'
import openGraphImg from '../assets/icons/say-less-image-graph.jpg'
import Layout from '../components/layout'
import '../pages/index.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const metadata = get(this, 'props.data.site.siteMetadata.description')
    console.log(metadata)
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const headerText = get(
      this,
      'props.data.allContentfulHomePageText.nodes[0].title.title'
    )
    const landing = get(this, 'props.data.allContentfulLanding.nodes[0]')
    const { useLandingPage }  = landing;
    let useLandingBoolean = useLandingPage;
    return (
      <div>
        {/* <Helmet title={siteTitle} defer={false}>
          <meta content={metadata} name="description" />
          <meta property="og:url" content="https://sayless.studio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`https://sayless.studio${openGraphImg}`} />
          <meta property="og:title" content={siteTitle} />
          <meta property='og:description' content={metadata} />
          <meta name='twitter:title' content={siteTitle} />
          <meta name='twitter:description' content={metadata} />
          <meta name='twitter:image' content={`https://sayless.studio${openGraphImg}`} />
          <meta name='twitter:card' content={`https://sayless.studio${openGraphImg}`} />
          <meta name='twitter:site' content="@theolivewave" />
        </Helmet> */}
        <Layout landing={landing} useLandingBoolean={useLandingBoolean} location={this.props.location}>
          <div
            style=
            {{
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }} >
            {useLandingBoolean === true ? (
              <Landing landing={landing} />
            ) : (
              <React.Fragment>
                <Header headerText={headerText} noFade />
                <HomeSlideshow />
                <Specialties />
                <FeaturedWorks />
              </React.Fragment>
            )}
          </div>
        </Layout>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulLanding {
      nodes {
        contactLinkOne
        contactLinkTwo
        contactTitleOne
        contactTitleTwo
        headlineOne
        headlineTwo
        title
        text {
          text
        }
        useLandingPage
      }
    }
    allContentfulHomePageText {
      nodes {
        title {
          title
        }
      }
    }
  }
`

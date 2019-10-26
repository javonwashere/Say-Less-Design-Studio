import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import About from '../components/sayless/about/about'
import Header from '../components/sayless/header/header'
import Specialties from '../components/sayless/index/specialties/specialties'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    // const people = get(this, 'props.data.allContentfulPerson.edges');
    console.log(get(this, "props"))

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Header />
          <Specialties />
          {/*<About />*/}
          {/*<div className="wrapper">*/}
            {/*<h2 className="section-headline">Recent articles</h2>*/}
            {/*<ul className="article-list">*/}
              {/*{posts.map(({ node }) => {*/}
                {/*return (*/}
                  {/*<li key={node.slug}>*/}
                    {/*<ArticlePreview article={node} />*/}
                  {/*</li>*/}
                {/*)*/}
              {/*})}*/}
            {/*</ul>*/}
          {/*</div>*/}
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
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
             ...GatsbyContentfulFluid_tracedSVG
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

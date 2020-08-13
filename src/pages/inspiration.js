import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './inspiration.css'
import Masonry from 'react-masonry-css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { divide } from 'lodash'

class Inspiration extends React.Component {
  render() {
    // console.log(get(this, "props"));
    const inspoPageData = get(
      this,
      'props.data.allContentfulInspirationPage.nodes[0]'
    )
    const { title, masonryGrid } = inspoPageData

    console.log(masonryGrid)

    const images = () => {
      return masonryGrid.map(image => {
        return (
          // <Zoom>
          <Img class="inspiration-zoom-class" fluid={image.fluid} />
          // </Zoom>
        )
      })
    }

    return (
      <Layout>
        <div className="inspiration-container">
          <div className="inspiration-title">
            <h1>{title}.</h1>
          </div>
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images()}
          </Masonry>
        </div>
      </Layout>
    )
  }
}

export default Inspiration

export const pageQuery = graphql`
  query {
    allContentfulInspirationPage {
      nodes {
        title
        masonryGrid {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './inspiration.css'
import Masonry from 'react-masonry-css'
import SayLessIcon from '../assets/icons/sayless-logo.png'
import Inspo1 from '../assets/inspiration-images/Inspo-1.jpg';
import Inspo2 from '../assets/inspiration-images/Inspo-2.jpg';
import Inspo3 from '../assets/inspiration-images/Inspo-3.jpg';
import Inspo4 from '../assets/inspiration-images/Inspo-4.jpg';
import Inspo5 from '../assets/inspiration-images/Inspo-5.jpg';
import Inspo6 from '../assets/inspiration-images/Inspo-6.jpg'
import Inspo7 from '../assets/inspiration-images/Inspo-7.jpg'
import Inspo8 from '../assets/inspiration-images/Inspo-8.jpg'



class Inspiration extends React.Component {
    render() {
        // console.log(get(this, "props"));
        const inspoPageData = get(this, "props.data.allContentfulInspirationPage.nodes[0]");
        const { title, masonryGrid } = inspoPageData

        console.log(masonryGrid);

        const images = () => {
           return masonryGrid.map(image => <Img fluid={image.fluid} />)
        }

        return (
            <Layout>
                <div className="inspiration-container">
                    <div className="inspiration-title"><h1>{title}.</h1></div>
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {images()}
                    </Masonry>
                </div>
            </Layout >
        )
    }
}


export default Inspiration;

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
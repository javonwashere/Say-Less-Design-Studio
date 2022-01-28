import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './work.css'





class Works extends React.Component {
  render() {
    const caseStudiesData = get(this, "props.data.allContentfulCaseStudy.edges");
    console.log(caseStudiesData);
    const caseStudies = caseStudiesData.map(({ node }, index) => {
      const { client, slug, heroImage } = node;
      return caseStudy({ client, slug, heroImage }, index);
    })

    return (
      <Layout>
        <div className="works-container">
          <div className="works-title"><h1>Our Work</h1></div>
          <div className="works-wrapper">
            {caseStudies}
          </div>
        </div>
      </Layout>
    )
  }
}


const caseStudy = ({ client, slug, heroImage }, key) => {
  return (
    <div className="case-study">
      <div className="case-study-img-wrapper">
        <Link style={{ textDecoration: 'none' }} id={key} to={`/work/${slug}`}>
          <Img className="case-study-img" fluid={heroImage.fluid} />
        </Link>
      </div>
      <div className="case-study-client">
        <div className="case-study-client-title">
          <Link style={{ textDecoration: 'none' }} id={key} to={`/work/${slug}`}>CLIENT</Link>
        </div>
        <div className="case-study-client-name">
          <Link style={{ textDecoration: 'none' }} id={key} to={`/work/${slug}`}>{client}</Link>
        </div>
      </div>
    </div>
  )
}


export default Works

export const pageQuery = graphql`
query Work {
        allContentfulCaseStudy {
        edges {
        node {
        client
          slug
          heroImage {
        fluid {
        ...GatsbyContentfulFluid_tracedSVG
      }
      }
    }
  }
}
}

`
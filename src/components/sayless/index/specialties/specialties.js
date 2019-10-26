import React from 'react'
import Img from 'gatsby-image'
import People from './people'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import ReactDOM from "react-dom";
import styles from './about.css'


// Static Query needed to fetch data from this component specifically
export default () =>  {
  return (
    <StaticQuery
        query={pageQuery}
        render={data => {
          console.log(data);
          return specialtiesComponent(data);
        }}
    />
)}




const specialtiesComponent = (data) => {
  return (
      <div className="wrapper">
        Hello
      </div>
  )
}

export const specialtiesQuery = graphql`
  query specialtiesQuery {
  allContentfulSpecialties {
    nodes {
      id
      title
      specialtiesList {
        specialtiesList
      }
      specialtiesImage {
        fluid(maxWidth: 800) {
          sizes
          src
          srcSet
      	}
      }
    }
  }
`

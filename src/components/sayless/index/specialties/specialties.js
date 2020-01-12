import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import "./specialties.css"
import Img from "gatsby-image";
import AboutUs from "../../../../../src/assets/icons/about-us.png"
import AboutUsText from "../../../../../src/assets/icons/aboutus-text.png"
import AboutUsArrow from "../../../../../src/assets/icons/aboutus-arrow.png"



// Static Query needed to fetch data from this component specifically
export default () =>  {
  return (
    <StaticQuery
        query={pageQuery}
        render={data => {
          return specialtiesComponent(data);
        }}
    />
)}




const specialtiesComponent = (data) => {
      const specialtiesInfo = data.allContentfulSpecialties.nodes[0];
      console.log("BRO", specialtiesInfo);
      const title = specialtiesInfo.title;
      const description = specialtiesInfo.specialtiesList.specialtiesList.split("\n");
      const img = specialtiesInfo.specialtiesImage.fluid;


      const listOfSpecialties = (description) => {
        return description.map((specialty, index) => {
          const indexNumber = (index+1).toString().length > 1 ? index + 1 : `0${index + 1}`;
          const indexLocation = index % 2 === 0
              ? "specialty-child specialty-item-detail-left"
              : "specialty-child specialty-item-detail-right";
          return (
              <div className={indexLocation}>
                <div className="inner-text">
                <sup style={{paddingRight : ".5em"}}>{indexNumber}.</sup>
                {specialty}
                </div>
              </div>
          );
        });
      }



  return (
      <div className="wrapper">
        <div className="specialties-container">

          <div className="specialties-left">
            <Img className="specialties-img" fluid={img} />

          </div>
          <div className="specialties-right">

              <div className="specialties-grid">
                <div className="specialty-child-title">
                  <div className="specialties-title">
                    <h2>{title}</h2>
                  </div>
                </div>
              {listOfSpecialties(description)}
                <div className="specialty-child-holder" />
                <div className="specialty-child-about-us">
                  <Link to={"/aboutus"}>
                  <img className="specialty-child-about-us-arrow" src={AboutUsArrow} />
                  <img className="specialty-child-about-us-text" src={AboutUsText} />

                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export const pageQuery = graphql`
  query specialtiesQuery {
  allContentfulSpecialties {
    nodes {
      id
      title
      specialtiesList {
        specialtiesList
      }
      specialtiesImage {
        fluid(maxWidth: 1200, quality: 100) {
          src
          ...GatsbyContentfulFluid_tracedSVG
      	}
      }
    }
  }
}
`

import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './inspiration.css'
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
        // const caseStudiesData = get(this, "props.data.allContentfulCaseStudy.edges");
        // console.log(caseStudiesData)

        return (
            <Layout>
                <div className="inspiration-container">
                    <div className="inspiration-title"><h1>Say Less</h1></div>
                    <div className="inspiration-text">We are Randi Bellamy and Cheyenne Jacobs. We began working together in 2016, and formed Say Less Design Studio in September 2019. We combine our backgrounds in design, illustration, and photography to create lasting impressions, both tactile and digital..</div>
                    <div className="inspiration-images-grid">
                        <div className="row-1">
                            <div className="column-1-left">
                                <img src={Inspo1} />
                            </div>
                            <div className="column-1-right">
                                <div className="inner-1-row-upper">
                                    <img src={Inspo2} />
                                </div>
                                <div className="inner-1-row-lower">
                                    <img src={Inspo3} />
                                    <img src={Inspo4} />
                                </div>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="column-2-left">
                                <img src={Inspo5} />
                            </div>
                            <div className="column-2-right">
                                <div className="inner-2-row-upper">
                                    <img src={Inspo7} />
                                </div>
                                <div className="inner-2-row-lower">
                                    <img src={Inspo6} />
                                </div>
                            </div>
                        </div>
                        <div className="row-3">
                            <img src={Inspo8} />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}


export default Inspiration;

// export const pageQuery = graphql`
// query {
//         allContentfulCaseStudy {
//         edges {
//         node {
//         client
//           slug
//           heroImage {
//         fluid {
//         ...GatsbyContentfulFluid_tracedSVG
//       }
//       }
//     }
//   }
// }
// }

// `
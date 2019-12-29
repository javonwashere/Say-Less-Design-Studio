import React from "react"
import { graphql } from "gatsby"
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './contact.css'



class Contact extends React.Component {
    render() {
        // console.log(get(this, "props"));
        // const caseStudiesData = get(this, "props.data.allContentfulCaseStudy.edges");
        // console.log(caseStudiesData)

        const form = (
            <form name="contact" netlify>
                <p>
                    <label>Name <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Email <input type="email" name="email" /></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        );



        return (
            <Layout>
                <div className="inspiration-container">
                    <div class="wrap-contact2">
                    </div>
                    {form}
                </div>
            </Layout>
        )
    }
}


export default Contact;
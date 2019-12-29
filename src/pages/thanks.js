import React from "react"
import { graphql } from "gatsby"
import { navigate } from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './contact.css'


export default ({ location }) => {
  console.log(location.state);
  return (
    <Layout>
      <div className="contact-wrapper" style={{ minHeight: "80vh" }}>
        <h1 style={{textAlign: "center"}}>Thanks, {location.state.firstName}! We look forward to reaching out to you soon.</h1>
      </div>
    </Layout>
  )
}
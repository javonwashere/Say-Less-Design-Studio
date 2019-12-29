import React from "react"
import { graphql } from "gatsby"
import { navigate } from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './contact.css'


export default ({location}) => {
  console.log(location.state);
  return (
    <Layout>
      <h1>Thanks, {location.state.name}! We look forward to reaching out to you.</h1>
    </Layout>
  )
}
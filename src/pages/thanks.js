import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import './contact.css'


export default ( props ) => {
  console.log(props, "nigga");
  // let name;
  // if(location.state != null) {
  //   name = '';
  // } else {
  //   name = location.state.name != null ? location.state.name : ''

  
  return (
    <Layout>
      <div className="contact-wrapper" style={{ minHeight: "80vh" }}>
        <h1 style={{textAlign: "center"}}>Thanks! We look forward to reaching out to you soon.</h1>
      </div>
    </Layout>
  )
}
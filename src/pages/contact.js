import React from "react"
import { graphql } from "gatsby"
import { navigate } from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout";
import Img from 'gatsby-image'
import { Link } from "gatsby";
import './contact.css'


function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default function Contact() {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
  
    return (
      <Layout>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }


// class Contact extends React.Component {
//     render() {
//         // console.log(get(this, "props"));
//         // const caseStudiesData = get(this, "props.data.allContentfulCaseStudy.edges");
//         // console.log(caseStudiesData)

//         const form = (
//             <form name="contact" netlify>
//                 <p>
//                     <label>First Name <input type="text" name="firstName" /></label>
//                 </p>
//                 <p>
//                     <label>Last Name <input type="text" name="lastName" /></label>
//                 </p>
//                 <p>
//                     <label>Company <input type="text" name="company" /></label>
//                 </p>
//                 <p>
//                     <label>Job Title <input type="text" name="jobTitle" /></label>
//                 </p>
//                 <p>
//                     <label>Email <input type="email" name="email" /></label>
//                 </p>
//                 <p>
//                     <label>Phone Number <input type="number" name="phoneNumber" /></label>
//                 </p>
//                 <p>
//                     <button type="submit">Send</button>
//                 </p>
//             </form>
//         );



//         return (
//             <Layout>
//                 <div className="inspiration-container">
//                     {form}
//                 </div>
//             </Layout>
//         )
//     }
// }


// export default Contact;
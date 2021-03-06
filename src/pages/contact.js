import React, { useState } from "react"
import axios from "axios";

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
    const [state, setState] = React.useState({ name: '' })

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/5b2c2ec3-360b-4853-b90e-4dfbfd347ab0",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .then(() => navigate("/thanks", { status }))
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (
        <Layout>
            <div className="contact-wrapper">
                <div className="contact-details">
                    <h1 className="contact-header">Drop A Line. Say Hi. Tell A Story. Inquire.</h1>
                    <div className="contact-info">
                        <div className="contact-address">
                            <h2>Address:</h2>
                            <a href="http://maps.google.com/maps?q=39.9526,-75.1652">39.9526° N, 75.1652° W</a>
                        </div>
                        <div className="contact-phone">
                            <h2>Phone:</h2>
                            215 917 1373
                        </div>
                        <div className="contact-email">
                            <h2>Email:</h2>
                            info@sayless.studio
                        </div>
                    </div>
                </div>
                <div className="form-wrapper">
                    <form
                        name="contact"
                        method="post"
                        onSubmit={handleOnSubmit}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        {/* <input type="hidden" name="form-name" value="contact" /> */}
                        {/* <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                            </label>
                        </p> */}
                        <p>
                            <label>First Name <br /><input type="text" name="firstName" onChange={handleChange} /></label>
                        </p>
                        <p>
                            <label>Last Name <br /><input type="text" name="lastName" onChange={handleChange} /></label>
                        </p>
                        <p>
                            <label>Company <br /><input type="text" name="company" onChange={handleChange} /></label>
                        </p>
                        <p>
                            <label>Job Title <br /><input type="text" name="jobTitle" onChange={handleChange} /></label>
                        </p>
                        <p>
                            <label>Email <br /><input type="email" name="email" onChange={handleChange} required /></label>
                        </p>
                        <p>
                            <label>Phone Number <br /><input type="number" name="phoneNumber" onChange={handleChange} /></label>
                        </p>
                        <p>
                            <label>
                                Message:
              <br />
                                <textarea name="message" onChange={handleChange} onChange={handleChange} />
                            </label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>
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
                // <p>
                //     <label>First Name <input type="text" name="firstName" /></label>
                // </p>
                // <p>
                //     <label>Last Name <input type="text" name="lastName" /></label>
                // </p>
                // <p>
                //     <label>Company <input type="text" name="company" /></label>
                // </p>
                // <p>
                //     <label>Job Title <input type="text" name="jobTitle" /></label>
                // </p>
                // <p>
                //     <label>Email <input type="email" name="email" /></label>
                // </p>
                // <p>
                //     <label>Phone Number <input type="number" name="phoneNumber" /></label>
                // </p>
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

import React from 'react'
import './textbox-module.css';
import Triangle from '../../../../assets/icons/triangle.png'


export default ({ props }) => {
    let content;
    const text = props.text.text;
    if (props.type != "Header") {
        content = generateHeader(text);
    } else {
        content = generateQuote(text);
    }

    return (
        <React.Fragment>    
            {content}
        </React.Fragment>
    )
}

const generateHeader = (text) => {
    return (
        <div className="textbox-wrapper head">
            <div className="textbox-triangle-header">
                <img src={Triangle} />
            </div>
            <h1>
                {text}
            </h1>
        </div>
    )
}

const generateQuote = (text) => {
    return (
        <div className="textbox-wrapper">
            <div className="textbox-triangle-quote">
                <img src={Triangle} />
            </div>
            <h1>
                {text}
            </h1>
            <div className="textbox-client-quote">
                - Client Quote
            </div>
        </div>
    )
}
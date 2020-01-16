import React from 'react'
import './textbox-module.css';
import Triangle from '../../../../assets/icons/triangle.png'


export default ({ props, name }) => {
    let content;
    const text = props.text.text;
    if (props.type != "Header") {
        content = generateHeader(text, name);
    } else {
        content = generateQuote(text, name);
    }

    return (
        <React.Fragment>    
            {content}
        </React.Fragment>
    )
}

const generateHeader = (text, name) => {
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

const generateQuote = (text, name) => {
    return (
        <div className="textbox-wrapper">
            <div className="textbox-triangle-quote">
                <img src={Triangle} />
            </div>
            <h1>
                {text}
            </h1>
            <div className="textbox-client-quote">
                - {name}
            </div>
        </div>
    )
}
import React from 'react'
import './textbox-module.css';


export default ({ props }) => {
    let content;
    const text = props.text.text;
    if (props.type === "Header") {
        content = generateHeader(text);
    } else {
        f
        //   content = generateOneImage(props);
    }


    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}

const generateHeader = (text) => {
    return (
        <div className="textbox-wrapper">
            <h1>
                {text}
            </h1>
        </div>
    )
}
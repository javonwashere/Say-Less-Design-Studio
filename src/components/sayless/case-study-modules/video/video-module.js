import React from 'react'
import Img from 'gatsby-image'
import "../modules.css"

export default ({ props }) => {
    const content = generateVideo(props);
    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
}


const generateVideo = ({ mute, autoPlay, video }) => {
    console.log("autoPlay?", autoPlay)
    const width = 100;
    const position = "center";

    const styles = {
        width: `${width}%`,
        alignSelf: position,
    };

    let content;

    // if (mute == true && autoPlay == true) {
    //     return (
    //     <video className="video-body" controls autoPlay muted playsInline>
    //             <source src={video.file.url} type={video.file.contentType} />
    //         </video>
    //         )
    // }

    // if (autoPlay == true) {
    //     console.log("which is it?")
    //     return(
    //     <video className="video-body" controls autoPlay>
    //             <source src={video.file.url} type={video.file.contentType} />
    //         </video>
    //         )
    // }controls autoPlay playsInline loop preload="metadata"

    // if (mute == true) {
        return (<video className="video-body" controls mute={mute} autoPlay={autoPlay} playsInline preload="metadata" loop="true">
                <source src={video.file.url} type={video.file.contentType} />
            </video>
            )
    // }
}
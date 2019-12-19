import React from 'react'
import Images from './image-module/image-module'
import TextBox from './textbox-module/textbox-module'
import SlideShow from "./slideshow-module/slideshow-module"


export default ({ props }) => {
    console.log("GIVE ME THE MODULE", props);
    const allModules = props.map((module) => {
        const typeName = module.internal.type;
        console.log(typeName);
        let content = <div></div>;
        switch (typeName) {
            case "ContentfulImage":
                content = <Images props={module} />;
                break;
            case "ContentfulTextBox":
                content = <TextBox props={module} />;
                break;
            case "ContentfulImageSlideshow":
                content = <SlideShow props={module} />
                break;
            default:
                content = <div>"no content found"</div>
        }
        return content;
    })

    console.log(allModules);



    return (
        <div className="case-study-modules">
            {allModules}
        </div>
    )
}

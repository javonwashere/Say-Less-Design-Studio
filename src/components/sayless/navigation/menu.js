import React from "react";
import {Link} from "gatsby";








export default ({ style }) =>  {


  // this function splits the first and last name onto separate lines


  return (
      <div style={style} className="menu-container">
        <div className="menu-items">
          <h1 className="menu-item">
            <Link style={{textDecoration: "none"}} to={`/aboutus`}>The Studio</Link>
          </h1>
          <h1 className="menu-item">Our Work</h1>
          <h1 className="menu-item">Inspiration</h1>
          <h1 className="menu-item">Contact</h1>
        </div>
      </div>
  )}





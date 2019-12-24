import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";


export default ({ style, toggleMenu }) => {
  const menuContainer = useRef();
  useEffect(() => {
    menuContainer.current.addEventListener('touchmove', function (e) {

      e.preventDefault();

    }, false);
  })

  console.log(menuContainer)

  // this function splits the first and last name onto separate lines


  return (
    <div ref={menuContainer} style={style} className="menu-container">
      <div className="menu-items">
        <h1 className="menu-item">
          <Link style={{ textDecoration: "none" }} to={`/aboutus`} onClick={toggleMenu}>The Studio</Link>
        </h1>
        <h1 className="menu-item">
          <Link style={{ textDecoration: "none" }} to={`/work`} onClick={toggleMenu}>Our Work</Link>
        </h1>
        <h1 className="menu-item">Inspiration</h1>
        <h1 className="menu-item">Contact</h1>
      </div>
    </div>
  )
}





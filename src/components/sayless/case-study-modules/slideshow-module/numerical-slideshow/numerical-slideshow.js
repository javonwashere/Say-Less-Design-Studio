import React, { useState } from 'react'
import { useTransition } from 'react-spring'


const numbers = (images, setIndex) => {

    const [lastNumber, setLastNumber] = useState(0);
  
    const setNav = (index) => {
      setLastNumber(index);
      setIndex(index);
    }
  
    const numbersRow = images.map((image, index) => {
      return (
        <React.Fragment>
          <div className="navbar-index-number" onClick={() => setNav(index)}>{index + 1}</div>
          <div className="navbar-rule-container">
            {index === lastNumber ?
              <div className="navbar-rule-active" /> :
              <div className="navbar-rule-dormant" />}
          </div>
        </React.Fragment>
      );
    })
  
    return (
      <React.Fragment>
        <div className="navbar-numbers-row">
          {numbersRow}
        </div>
        <div className="navbar-prev-next">
          {lastNumber != 0 &&
            <div className="navbar-prev"
              onClick={() => setNav(lastNumber - 1)}>PREV</div>}
          {lastNumber != images.length - 1 &&
            <div className="navbar-next"
              onClick={() => setNav(lastNumber + 1)}>NEXT</div>}
        </div>
      </React.Fragment>
    )
  };
  
  const paginationRows = (images, setIndex) => {
    return (
      <div className="navigation-slideshow">
        <div className="navigation-numbers-wrapper">
        </div>
        <div className="navigation-pagination">
          {numbers(images, setIndex)}
        </div>
      </div>
    )
  }
  
  
  const numericalSlideshow = (images) => {
    const [index, setIndex] = useState(0);
    const transitions = useTransition(index, p => p, {
      leave: { opacity: 0 },
    });
    return (
      <div className="slideshow-wrapper-module">
        {transitions.map(({ item, props, key }) => {
          const Image = images[item];
          console.log(Image);
          return <Image key={key} style={props} />
        })}
        {paginationRows(images, setIndex)}
      </div>
    )
  }

  export default numericalSlideshow;
import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import './header.css'

const items = ['Say Less Design Studio is', 'Quisque congue tincidunt', 'lacinia dolor.'];
const config = { mass: 5, tension: 1000, friction: 200 };

export default () => {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    // height: toggle ? 10 : 0,
    minHeight: toggle ? "100%" : "0%",
    from: { opacity: 0, x: 20, minHeight: "0" },
  })

  return (
      <header className="header-sayless" onClick={() => set(state => !state)}>
        <div className="header-container">
          {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                  key={items[index]}
                  style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height, zIndex: "2" }}>
                  <h1 className="header-text">
                    {items[index]}
                  </h1>
                </animated.div>
              </animated.div>
          ))}
        </div>
      </header>
  )
}

import { render } from 'react-dom'
import Person from "./person"
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './about.css'

export default ({ people }) => {
  const [person, setPerson] = useState(people[0]);

  let allPeople = people.map((person) => {
    return ({ style }) =>
        <animated.div style={{...style, position: 'relative'}}>
          <Person
              className="about-person-object"
              person={person}
              handleRightClick={onRightClick}
              handleLeftClick={onLeftClick}
          />
        </animated.div>
  });
  // console.log("allpeople", allPeople)

  let indexP = 0;
  const nextPerson = () => {
    indexP = indexP + 1; // increase i by one
    indexP = indexP % people.length; // if we've gone too high, start from `0` again
    return setPerson(people[indexP]); // give us back the item of where we are now
  }

  const previousPerson = () => {
    if (indexP === 0) { // i would become 0
      indexP = people.length; // so put it at the other end of the array
    }
    indexP = indexP - 1; // decrease by one
    return setPerson(people[indexP]); // give us back the item of where we are now
  }





  const [index, set] = useState(0);
  const onRightClick = useCallback(() => set(state => (state + 1) % allPeople.length), [])
  const onLeftClick = useCallback(() => set(state => (state + 1) % allPeople.length), [])
  const transitions = useTransition(index, p => p, {
    leave: { opacity: 0 },
  })



  return (
      <div className="about-people-container">
        {transitions.map(({ item, props, key }) => {
          const ThisPerson = allPeople[item]
          return <ThisPerson key={key} style={props} />
        })}
      </div>
  )
}


import React, { useState } from "react";
import Person from "./person"


export default ({ people }) => {
  const [person, setPerson] = useState(people[0]);
  let index = 0;
  const nextPerson = () => {
    index = index + 1; // increase i by one
    index = index % people.length; // if we've gone too high, start from `0` again
    return setPerson(people[index]); // give us back the item of where we are now
  }

  const previousPerson = () => {
    if (index === 0) { // i would become 0
      index = people.length; // so put it at the other end of the array
    }
    index = index - 1; // decrease by one
    return setPerson(people[index]); // give us back the item of where we are now
  }

  return (
      <div>
      <Person className="about-person-object"
              person={person}
              handleRightClick={nextPerson}
              handleLeftClick={previousPerson}
      />
      </div>
  )
}



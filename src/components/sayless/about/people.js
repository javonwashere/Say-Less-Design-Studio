import React from "react";
import Person from "./person"


// export default ({ people }) =>  {
//     const person = people[0];
//   return (
//       <Person className="about-person-object" person={person}/>
//   )
//   // return people.map(person => {
//   //   return (
//   //       <Person className="about-person-object" person={person}/>
//   //   )
//   // })
// }

class People extends React.Component {
  constructor(props) {
    super(props);
    console.log("yo", props)
  }

  render() {
    const person = this.props.people[0];
    return (
        <Person className="about-person-object" person={person}/>
    )
  }

}

export default People;



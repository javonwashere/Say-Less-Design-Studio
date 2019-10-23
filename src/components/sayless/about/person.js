import React from "react";
import Img from 'gatsby-image'


export default ({ person }) =>  {

  console.log("Show the person", person);
  const nameObj = person.node.name.split(" ");
  console.log(nameObj);

  // this function splits the first and last name onto separate lines
  const firstAndLastName = nameObj =>
    nameObj.map(name => {
      return (
          <h1 className="about-person-name">{name}</h1>
      )
    })
  ;

  return (
      <div className="about-person-container">
        <div className="about-person-left">
          <div className="about-person-paragraph">
            <div className="about-person-title"><h4>{person.node.title}</h4></div>
            <div className="about-person-bio">{person.node.shortBio.shortBio}</div>
            <div className="about-person-website"><a href={person.node.website}>{person.node.website}</a></div>
            <div className="about-person-insta"><a href={person.node.instagram}>{person.node.instagram}</a></div>
          </div>
          <div className="about-person-name-container">
            {firstAndLastName(nameObj)}
          </div>
        </div>
        <div className="about-person-right">
          <div className="about-person-img"><Img fluid={person.node.heroImage.fluid} /></div>
        </div>
      </div>
  )}



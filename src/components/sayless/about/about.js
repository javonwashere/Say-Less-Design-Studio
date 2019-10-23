import React from 'react'
import Img from 'gatsby-image'

import styles from './about.css'

export default ({ people }) =>  {

    console.log("Show the people", people);

return (
    <div className={styles["about-container"]}>
      <div>"hello"</div>
    </div>
)}


// {/*<div className={styles.hero}>*/}
// {/*<Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} />*/}
// {/*<div className={styles.heroDetails}>*/}
// {/*<h3 className={styles.heroHeadline}>{data.name}</h3>*/}
// {/*<p className={styles.heroTitle}>{data.title}</p>*/}
// {/*<p>{data.shortBio.shortBio}</p>*/}
// {/*</div>*/}
// {/*</div>*/}

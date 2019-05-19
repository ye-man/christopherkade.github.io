import React from "react"
import { Link } from "gatsby"

import "./AboutContent.scss"
import Christopher from "./christopher.jpg"

const AboutContent = () => {
  return (
    <article className="about">
      <h1 className="about-title">About Me</h1>

      <p className="about-p">
        <span role="img" aria-label="">👋</span> I'm Christopher Kade, a Front End developer from Paris, France. <br />
        I love everything Javascript and enjoy teaching it through code and words.
      </p>

      <div className="about-img-container">
        <img src={Christopher} className="about-img" alt="christopher kade" />
        <br />
        <span role="img" aria-label="">☝</span><span className="about-img-text">That's me !</span>
      </div>

      <p>
        I've been doing web development for over 5 years and enjoy working with technologies such as React, Vue and Node.
        I put great emphasis on code quality, testing and performance throughout my projects.
      </p>

      <p>
        I've discovered teaching through writing articles and really enjoy it, <br />
        I've kept writing ever since and plan on doing training sessions in the future. <span role="img" aria-label="">👨‍🏫</span>
      </p>

      <h1 className="about-secondary-title">Things I've done</h1>

      <p>My projects & open-source contributions, over on <a href="https://github.com/christopherkade">Github</a>.</p>
      <p>My articles, right here on my <Link to="/">blog</Link> and sometimes on <a href="https://dev.to/christopherkade">dev.to</a>.</p>

      <h1 className="about-secondary-title">Contacting me</h1>

      <p>For any questions, invitations to speak, or requests, <br />feel free to contact me via <a href="https://www.linkedin.com/in/christopher-kade/">LinkedIn</a> or <a href="https://twitter.com/christo_kade">Twitter</a>.</p>
    </article>
  )
}

export default AboutContent

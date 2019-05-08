import React from "react"
import { Link } from "gatsby"

import "./AboutContent.scss"
import Christopher from "./christopher.jpg"

const AboutContent = () => {
  return (
    <article className="about">
      <h1 className="about-title">About Me</h1>

      <p className="about-p">
        👋 I'm Christopher Kade, a Front End consultant currently in Paris, France. <br />
        I love everything Javascript and enjoy teaching it through code and words.
      </p>

      <div className="about-img-container">
        <img src={Christopher} className="about-img" alt="christopher kade" />
        <br />
        <span>☝</span><span className="about-img-text">That's me !</span>
      </div>

      <p>
        I've been doing web development for over 5 years now and tend to enjoy working with technology such as React, Vue and Node.
        I put great emphasis on code quality, testing and performance throughout my projects.
      </p>

      <p>
        I've discovered teaching through writing articles and really enjoy it, <br />
        I've kept writing ever since and plan on doing training sessions in the future. 👨‍🏫
      </p>

      <h1 className="about-secondary-title">Things I've done</h1>

      <p>My projects & open-source contributions, over on <a href="https://github.com/christopherkade">Github</a>.</p>
      <p>My articles, right here on my <Link to="/blog">blog</Link> and sometimes on <a href="https://dev.to/christopherkade">dev.to</a>.</p>

      <h1 className="about-secondary-title">Contacting me</h1>

      <p>For any questions, invitations to speak, or requests, feel free to contact me <Link to="/contact">here</Link>.</p>
    </article>
  )
}

export default AboutContent

import React from "react"
import { Link } from "gatsby"

import "./ArticleCard.scss"

const ArticleCard = (props) => {
  const { title, description, date, path, readTime } = props.article

  return (
    <div className="card">
      <Link className="card-link" to={path} >
        <time>{date} <span role="img" aria-label="">⌛️</span> {readTime} min read</time>
        <span>
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </span>
      </Link>
    </div >
  )
}

export default ArticleCard

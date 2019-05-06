import React from "react"
import { Link } from "gatsby"

import "./ArticleCard.css"

const ArticleCard = (props) => {
  const { title, description, date, path, readTime } = props.article

  return (
    <div className="card">
      <Link className="card-link" to={path} >
        <time>{date} ⌛️ {readTime} min read</time>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div >
  )
}

export default ArticleCard

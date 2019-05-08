import React from "react"
import { Link } from "gatsby"

import "./ArticleCard.scss"

/**
 * Converts the article's date into the M DD, YYYY format
 * @param {*} date
 */
const getConvertedDate = (date) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dateData = date.split("-")
  const month = monthNames[parseInt(dateData[1]) - 1]
  return `${month} ${dateData[1]}, ${dateData[0]}`
}

const ArticleCard = (props) => {
  const { title, description, date, path, readTime } = props.article

  return (
    <div className="card">
      <Link className="card-link" to={path}>
        <time>{getConvertedDate(date)} | <span role="img" aria-label="">⌛️</span>{readTime} min read</time>
        <span>
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </span>
      </Link>
    </div >
  )
}

export default ArticleCard

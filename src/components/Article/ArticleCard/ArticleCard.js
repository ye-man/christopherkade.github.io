import React, { useState } from "react"
import { Link } from "gatsby"

import "./ArticleCard.scss"

/**
 * Returns the position of the current element
 * @param {*} e
 */
const getPosition = (e) => {
  let xPos = 0;
  let yPos = 0;

  while (e) {
    xPos += e.offsetLeft + e.clientLeft;
    yPos += e.offsetTop + e.clientTop;
    e = e.offsetParent;
  }

  return {
    x: xPos,
    y: yPos
  };
};

/**
 * Returns the direction from which the user hovered a card
 * 0 -> top
 * 1 -> right
 * 2 -> bottom
 * 3 -> left
 * @param {*} e
 */
const getHoverDirection = (e) => {
  e.persist()

  const directionClasses = ["card top", "card right", "card bottom", "card left"]

  // Height and width of the current card
  const { clientHeight: h, clientWidth: w } = e.target
  let position = getPosition(e.target);

  // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
  let x = (e.pageX - position.x - (w / 2) * (w > h ? (h / w) : 1));
  let y = (e.pageY - position.y - (h / 2) * (h > w ? (w / h) : 1));

  // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3)
  let d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  let directionClass = directionClasses[d]

  return directionClass;
};

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
  return `${month} ${dateData[2]}, ${dateData[0]}`
}

const ArticleCard = (props) => {
  const [hoverClass, setHoverClass] = useState("card left")
  const { title, description, date, path, readTime } = props.article

  return (
    <div onMouseEnter={(e) => setHoverClass(getHoverDirection(e))} className={hoverClass}>
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

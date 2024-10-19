import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="Card">
    <p>{props.title}</p>
    </div>
  )
}

export default Card

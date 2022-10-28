import React from 'react'
import "./Trapezoid.css"

function trapezoid(props) {
  return (
    <div className={props.className}>
        <span className='trapozide_span'>{props.keys}</span>
    </div>
  )
}

export default trapezoid;

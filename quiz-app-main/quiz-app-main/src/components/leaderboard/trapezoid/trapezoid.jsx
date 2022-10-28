import React from 'react'
import "./trapezoid.css"

function Trapezoid(props) {
  return (
    <div className={props.className}>
        <span className='trapozide-span'>{props.keys}</span>
    </div>
  )
}

export default Trapezoid;

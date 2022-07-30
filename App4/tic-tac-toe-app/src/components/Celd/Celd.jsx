import React, { useState } from 'react'
import classNames from 'classnames'
import './Celd.css'
const Celd = ({ turn, value, winner, onClick }) => {
  const handleClick = () => {
    turn !== null && value === null && onClick()
  }
  let celdClass = classNames({
    celd: true,
    [`celd--${value}`]: value !== null,
    winner: winner,
  })
  return <div className={celdClass} onClick={() => handleClick()}></div>
}

export default Celd

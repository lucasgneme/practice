import React from 'react'
import './ScoreBoard.css'
const ScoreBoard = ({ scoreX, scoreO }) => {
  return (
    <div className='scoreBoard'>
      <div>{scoreX}</div>
      <div>{scoreO}</div>
    </div>
  )
}

export default ScoreBoard

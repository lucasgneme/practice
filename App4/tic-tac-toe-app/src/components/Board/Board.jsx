/* eslint-disable react/prop-types */
import React from 'react'
import Celd from '../Celd/Celd'
import './Board.css'
const Board = ({ turn, celds, winCelds, onClick }) => {
  const createCelds = values =>
    values.map((value, i) => (
      <Celd
        winner={winCelds.includes(value)}
        turn={turn}
        onClick={() => onClick(value)}
        key={`celd_${i}`}
        value={celds[value]}
      />
    ))
  return (
    <div className='board'>
      <div className='row'>{createCelds([0, 1, 2])}</div>
      <div className='row'>{createCelds([3, 4, 5])}</div>
      <div className='row'>{createCelds([6, 7, 8])}</div>
    </div>
  )
}

export default Board

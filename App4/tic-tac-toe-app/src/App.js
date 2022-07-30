import React, { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

function App() {
  const [turn, setTurn] = useState('X')
  const [celds, setCelds] = useState(Array(9).fill(null))
  const [winCelds, setWinCelds] = useState([])
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  })
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const checkWinner = newCelds => {
    for (let i = 0; i < winPositions.length; i++) {
      const [a, b, c] = winPositions[i]
      if (
        newCelds[a] &&
        newCelds[a] === newCelds[b] &&
        newCelds[a] === newCelds[c]
      ) {
        gameOver(newCelds[a], winPositions[i])
        return
      }
    }
    if (!newCelds.includes(null)) {
      gameOver(null, Array.from(Array(10).keys()))
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X')
  }
  const handlePlayerClick = celd => {
    let newCelds = [...celds]
    newCelds.splice(celd, 1, turn)
    setCelds(newCelds)
    checkWinner(newCelds)
  }
  const gameOver = (result, winPositions) => {
    setTurn(null)
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }
    setWinCelds(winPositions)
    setTimeout(() => {
      reset()
    }, 2000)
  }
  const reset = () => {
    setTurn('X')
    setCelds(Array(9).fill(null))
    setWinCelds([])
  }
  return (
    <div className='container'>
      <h1 className='title'>TA TE TI</h1>
      <Board
        winCelds={winCelds}
        turn={turn}
        celds={celds}
        onClick={handlePlayerClick}
      />
      <ScoreBoard scoreO={score.O} scoreX={score.X} />
    </div>
  )
}

export default App

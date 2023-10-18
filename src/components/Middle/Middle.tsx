import { MiddleStyled } from './Middle.styles'
import { GameItem } from '../GameItem/GameItem'
import { useState } from 'react'
import { GameItemType } from '../GameItem/GameItem.types'
import {
  computerMove,
  emptySquareInBoard,
  humanMove,
  idItemToChange,
  isTheGameFinish,
  resetGameBoard,
} from './Middle.helpers'

let isGameBlocked = false

export const Middle = () => {
  const [gameBoard, setGameBoard] = useState(
    Array.from({ length: 9 }).map((item, idx) => ({
      id: idx,
      type: GameItemType.EMPTY,
    })),
  )

  const onItemClick = (id: number) => {
    if (isGameBlocked) return
    if (emptySquareInBoard(gameBoard).length) {
      isGameBlocked = true
      const boardAfterHumanMove = humanMove(gameBoard, id)
      setGameBoard(boardAfterHumanMove)
      const emptyElementsInBoard = emptySquareInBoard(boardAfterHumanMove)
      let boardAfterComputerMove = boardAfterHumanMove
      if (emptyElementsInBoard.length) {
        setTimeout(() => {
          const randomId = idItemToChange(emptyElementsInBoard)
          boardAfterComputerMove = computerMove(boardAfterHumanMove, randomId)
          setGameBoard(boardAfterComputerMove)
          isGameBlocked = false
        }, 1000)
      }
    }
    console.log(gameBoard)
    if (emptySquareInBoard(gameBoard).length === 1 || isTheGameFinish(gameBoard)) {
      setTimeout(() => setGameBoard(resetGameBoard(gameBoard)), 1500)
    }
  }

  return (
    <MiddleStyled>
      <div className={'container'}>
        {gameBoard.map(({ id, type }, idx) => (
          <GameItem type={type} id={id} key={idx} onClick={onItemClick} />
        ))}
      </div>
    </MiddleStyled>
  )
}

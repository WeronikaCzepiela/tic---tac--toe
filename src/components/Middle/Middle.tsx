import { MiddleStyled } from './Middle.styles'
import { GameItem } from '../GameItem/GameItem'
import { useState } from 'react'
import {
  checkIfPlayerWonTheGame,
  computerMove,
  createNewGameBoard,
  emptySquaresOnTheBoard,
  getCircleSquareInBoard,
  getCrossSquareInBoard,
  getSquareIdToMark,
  humanMove,
} from './Middle.helpers'
import { ANIMATION_TIME } from './Middle.const'

let isGameBlocked = false

export const Middle = () => {
  const [gameBoard, setGameBoard] = useState(createNewGameBoard())

  const onItemClick = (fieldId: number) => {
    if (isGameBlocked) return
    isGameBlocked = true
    const boardAfterHumanMove = humanMove(gameBoard, fieldId)
    if (checkIfPlayerWonTheGame(getCrossSquareInBoard(boardAfterHumanMove))) {
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
        isGameBlocked = false
      }, ANIMATION_TIME)
      return setGameBoard(boardAfterHumanMove)
    }
    const emptyElementsInBoard = emptySquaresOnTheBoard(boardAfterHumanMove)
    if (emptyElementsInBoard.length) {
      setGameBoard(boardAfterHumanMove)

      setTimeout(() => {
        const boardAfterComputerMove = computerMove(
          boardAfterHumanMove,
          getSquareIdToMark(emptyElementsInBoard),
        )
        setGameBoard(boardAfterComputerMove)
        if (checkIfPlayerWonTheGame(getCircleSquareInBoard(boardAfterComputerMove))) {
          setTimeout(() => setGameBoard(createNewGameBoard()), ANIMATION_TIME)
        }
        isGameBlocked = false
      }, ANIMATION_TIME)
    }
    console.log(emptySquaresOnTheBoard(gameBoard).length)
    if (!emptySquaresOnTheBoard(gameBoard).length) {
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
        isGameBlocked = false
      }, ANIMATION_TIME)
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

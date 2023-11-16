import { MiddleStyled } from './Middle.styles'
import { GameItem } from '../GameItem/GameItem'
import { useState } from 'react'
import {
  checkIfPlayerWonTheGame,
  computerMove,
  createNewGameBoard,
  emptySquaresOnTheBoard,
  getCircleSquaresIdInBoard,
  getCrossSquaresIdInBoard,
  getSquareIdToMark,
  getStyleOfLine,
  humanMove,
} from './Middle.helpers'
import { ANIMATION_TIME, gameBoardMock } from './Middle.const'

let isGameBlocked = false

export const Middle = () => {
  const [gameBoard, setGameBoard] = useState(gameBoardMock)

  const onItemClick = (fieldId: number) => {
    if (isGameBlocked) return
    isGameBlocked = true
    const boardAfterHumanMove = humanMove(gameBoard, fieldId)
    if (checkIfPlayerWonTheGame(getCrossSquaresIdInBoard(boardAfterHumanMove))) {
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
        isGameBlocked = false
      }, ANIMATION_TIME)

      return setGameBoard(boardAfterHumanMove)
    }

    const emptyElementsInBoard = emptySquaresOnTheBoard(boardAfterHumanMove)
    let boardAfterComputerMove = boardAfterHumanMove
    if (emptyElementsInBoard.length) {
      setGameBoard(boardAfterHumanMove)

      setTimeout(() => {
        boardAfterComputerMove = computerMove(
          boardAfterHumanMove,
          getSquareIdToMark(emptyElementsInBoard),
        )
        setGameBoard(boardAfterComputerMove)

        if (checkIfPlayerWonTheGame(getCircleSquaresIdInBoard(boardAfterComputerMove))) {
          setTimeout(() => setGameBoard(createNewGameBoard()), ANIMATION_TIME)
        }
        isGameBlocked = false
      }, ANIMATION_TIME)
    }

    if (!emptySquaresOnTheBoard(boardAfterComputerMove).length) {
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
        console.log(emptySquaresOnTheBoard(boardAfterComputerMove).length)
        isGameBlocked = false
      }, ANIMATION_TIME)
    }

    return setGameBoard(boardAfterHumanMove)
  }

  return (
    <MiddleStyled>
      <div className={'container'}>
        {gameBoard.map(({ id, type }, idx) => (
          <GameItem type={type} id={id} key={idx} onClick={onItemClick} />
        ))}
      </div>
      {/*<div*/}
      {/*  className={'line'}*/}
      {/*  style={{ transform: getStyleOfLine(3).transform, width: getStyleOfLine(3).width }}*/}
      {/*/>*/}
    </MiddleStyled>
  )
}

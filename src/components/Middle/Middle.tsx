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
        console.log('dupa1')
        isGameBlocked = false
      }, ANIMATION_TIME)

      return setGameBoard(boardAfterHumanMove)
    }

    const emptyElementsInBoard = emptySquaresOnTheBoard(boardAfterHumanMove)
    let boardAfterComputerMove = boardAfterHumanMove
    console.log(emptyElementsInBoard.length)
    if (emptyElementsInBoard.length) {
      setGameBoard(boardAfterHumanMove)
      console.log('dupa2')
      setTimeout(() => {
        boardAfterComputerMove = computerMove(
          boardAfterHumanMove,
          getSquareIdToMark(emptyElementsInBoard),
        )
        setGameBoard(boardAfterComputerMove)

        console.log('dupa3')
        if (checkIfPlayerWonTheGame(getCircleSquaresIdInBoard(boardAfterComputerMove))) {
          setTimeout(() => setGameBoard(createNewGameBoard()), ANIMATION_TIME)
          console.log('dupa4')
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

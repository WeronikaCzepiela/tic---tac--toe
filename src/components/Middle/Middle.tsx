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
  getIdOfWinningCombination,
  getSquareIdToMark,
  getStyleOfLine,
  humanMove,
  IdOfWinningCombination,
} from './Middle.helpers'
import { ANIMATION_TIME, gameBoardMock } from './Middle.const'

let isGameBlocked = false

export const Middle = () => {
  const [gameBoard, setGameBoard] = useState(gameBoardMock)
  let winningIdCombination = 0
  const onItemClick = (fieldId: number) => {
    if (isGameBlocked) return
    isGameBlocked = true
    const boardAfterHumanMove = humanMove(gameBoard, fieldId)
    const idsOfCrossSquares = getCrossSquaresIdInBoard(boardAfterHumanMove)
    if (checkIfPlayerWonTheGame(idsOfCrossSquares)) {
      winningIdCombination = getIdOfWinningCombination(idsOfCrossSquares)
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
        isGameBlocked = false
      }, ANIMATION_TIME)

      return setGameBoard(boardAfterHumanMove)
    }

    const emptyElementsInBoard = emptySquaresOnTheBoard(boardAfterHumanMove)
    let boardAfterComputerMove = boardAfterHumanMove
    const idsOfCircleSquares = getCircleSquaresIdInBoard(boardAfterComputerMove)
    if (emptyElementsInBoard.length) {
      setGameBoard(boardAfterHumanMove)

      setTimeout(() => {
        boardAfterComputerMove = computerMove(
          boardAfterHumanMove,
          getSquareIdToMark(emptyElementsInBoard),
        )
        setGameBoard(boardAfterComputerMove)

        if (checkIfPlayerWonTheGame(idsOfCircleSquares)) {
          winningIdCombination = getIdOfWinningCombination(idsOfCircleSquares)

          setTimeout(() => setGameBoard(createNewGameBoard()), ANIMATION_TIME)
        }
        isGameBlocked = false
      }, ANIMATION_TIME)
    }

    if (!emptySquaresOnTheBoard(boardAfterComputerMove).length) {
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
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
      <div
        className={'line'}
        style={{
          transform: getStyleOfLine(winningIdCombination).transform,
          width: getStyleOfLine(winningIdCombination).width,
        }}
      />
    </MiddleStyled>
  )
}

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
  resetTheGame,
} from './Middle.helpers'
import { ANIMATION_TIME, gameBoardMock } from './Middle.const'
import { Line } from '../Line/Line'

let isGameBlocked = false

export const Middle = () => {
  const [gameBoard, setGameBoard] = useState(gameBoardMock)
  const [isSomeoneWon, setIsSomeoneWon] = useState(false)
  const [idOfWinningCombination, setIdOfWinningCombination] = useState(0)

  const onItemClick = (fieldId: number) => {
    if (isGameBlocked) return
    isGameBlocked = true
    const boardAfterHumanMove = humanMove(gameBoard, fieldId)
    const idsOfCrossSquares = getCrossSquaresIdInBoard(boardAfterHumanMove)
    if (checkIfPlayerWonTheGame(idsOfCrossSquares)) {
      setIsSomeoneWon(true)
      setIdOfWinningCombination(getIdOfWinningCombination(idsOfCrossSquares))
      setTimeout(() => {
        resetTheGame(setGameBoard, setIsSomeoneWon)
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
        let idsOfCircleSquares = getCircleSquaresIdInBoard(boardAfterComputerMove)
        if (checkIfPlayerWonTheGame(idsOfCircleSquares)) {
          setIdOfWinningCombination(getIdOfWinningCombination(idsOfCircleSquares))
          setIsSomeoneWon(true)
          setTimeout(() => resetTheGame(setGameBoard, setIsSomeoneWon), ANIMATION_TIME)
        }
        isGameBlocked = false
      }, ANIMATION_TIME)
    }

    if (!emptySquaresOnTheBoard(boardAfterComputerMove).length) {
      setTimeout(() => {
        setGameBoard(createNewGameBoard())
        setIsSomeoneWon(false)
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
      {isSomeoneWon && (
        // <Line id={2} />
        <div
          className={'line'}
          style={{
            transform: getStyleOfLine(idOfWinningCombination).transform,
            width: getStyleOfLine(idOfWinningCombination).width,
          }}
        />
      )}
    </MiddleStyled>
  )
}

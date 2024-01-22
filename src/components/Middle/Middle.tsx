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
import { DIMENSION, useWindowDimensions } from '../../utils'

let isGameBlocked = false

export const Middle = () => {
  const [gameBoard, setGameBoard] = useState(createNewGameBoard())
  const [isSomeoneWon, setIsSomeoneWon] = useState(false)
  const [idOfWinningCombination, setIdOfWinningCombination] = useState(0)

  const { width } = useWindowDimensions()
  const isOnMobile = width <= DIMENSION

  const onItemClick = (fieldId: number) => {
    if (isGameBlocked) return
    isGameBlocked = true
    const boardAfterHumanMove = humanMove(gameBoard, fieldId)
    const idsOfCrossSquares = getCrossSquaresIdInBoard(boardAfterHumanMove)
    if (checkIfPlayerWonTheGame(idsOfCrossSquares, isOnMobile)) {
      setIsSomeoneWon(true)
      setIdOfWinningCombination(getIdOfWinningCombination(idsOfCrossSquares, isOnMobile))
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
        if (checkIfPlayerWonTheGame(idsOfCircleSquares, isOnMobile)) {
          setIdOfWinningCombination(getIdOfWinningCombination(idsOfCircleSquares, isOnMobile))
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
      <div className={`container ${width > DIMENSION && 'container-desktop'}`}>
        {gameBoard.map(({ id, type }, idx) => (
          <GameItem type={type} id={id} key={idx} onClick={onItemClick} />
        ))}
      </div>
      {isSomeoneWon && (
        <Line
          transform={getStyleOfLine(idOfWinningCombination, isOnMobile).transform}
          width={getStyleOfLine(idOfWinningCombination, isOnMobile).width}
        />
      )}
    </MiddleStyled>
  )
}

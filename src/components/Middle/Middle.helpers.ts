import { GameItemType } from '../GameItem/GameItem.types'
import { WINNING_POINT_COMBINATIONS } from './Middle.const'

type GameBoardTypes = Array<{ id: number; type: GameItemType }>

export const humanMove = (gameBoard: GameBoardTypes, id: number) => {
  return gameBoard.map((item, idx) => {
    if (item.id === id)
      return {
        ...item,
        type: GameItemType.CROSS,
      }

    return item
  })
}

export const computerMove = (gameBoard: GameBoardTypes, id: number) => {
  return gameBoard.map((item) => {
    if (item.id === id)
      return {
        ...item,
        type: GameItemType.CIRCLE,
      }

    return item
  })
}

export const createNewGameBoard = () => {
  return Array.from({ length: 9 }).map((item, idx) => ({
    id: idx,
    type: GameItemType.EMPTY,
  }))
}

export const emptySquaresOnTheBoard = (gameBoard: GameBoardTypes) =>
  gameBoard.filter((item) => item.type === GameItemType.EMPTY)

export const getSquareIdToMark = (emptyElementsInBoard: GameBoardTypes) => {
  return emptyElementsInBoard[Math.floor(Math.random() * emptyElementsInBoard.length)].id
}

export const getCrossSquareInBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard
    .filter((item) => item.type === GameItemType.CROSS)
    .map((item) => {
      return item.id
    })
}

export const getCircleSquareInBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard
    .filter((item) => item.type === GameItemType.CIRCLE)
    .map((item) => {
      return item.id
    })
}

export const checkIfPlayerWonTheGame = (crossIdArray: Array<number>) => {
  if (crossIdArray.length < 3) return false

  return WINNING_POINT_COMBINATIONS.forEach((array) =>
    array.every((elem) => crossIdArray.includes(elem)),
  )
}

const animation = () => {}

import { GameItemType } from '../GameItem/GameItem.types'
import { WINNING_POINT_COMBINATIONS } from './Middle.const'
import React from 'react'

export type GameBoardTypes = Array<{ id: number; type: GameItemType }>
// export type IdOfWinningCombination = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type SetBoardTypes = (gameBoard: GameBoardTypes) => void
type SetIsSomeoneWonTypes = React.Dispatch<React.SetStateAction<boolean>>

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

export const getCrossSquaresIdInBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard
    .filter((item) => item.type === GameItemType.CROSS)
    .map((item) => {
      return item.id
    })
}

export const getCircleSquaresIdInBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard
    .filter((item) => item.type === GameItemType.CIRCLE)
    .map((item) => {
      return item.id
    })
}

export const checkIfPlayerWonTheGame = (idsArray: Array<number>) => {
  let hasAllElements: boolean = false
  if (idsArray.length < 3) return false

  WINNING_POINT_COMBINATIONS.map((item) => item.combination).forEach((array) => {
    if (!hasAllElements) hasAllElements = array.every((elem) => idsArray.includes(elem))
  })

  return hasAllElements
}

export const getIdOfWinningCombination = (idsArray: Array<number>) => {
  let hasAllElements: boolean = false
  let id: number = 0

  WINNING_POINT_COMBINATIONS.map((item, idx) => {
    if (!hasAllElements) {
      hasAllElements = item.combination.every((elem) => idsArray.includes(elem))
      id = idx
    }
  })
  return id
}

export const getStyleOfLine = (id: number) => WINNING_POINT_COMBINATIONS[id]

export const resetTheGame = (
  setGameBoard: SetBoardTypes,
  setIsSomeoneWon: SetIsSomeoneWonTypes,
) => (setGameBoard(createNewGameBoard()), setIsSomeoneWon(false))

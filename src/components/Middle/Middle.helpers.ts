import { GameItemType } from '../GameItem/GameItem.types'
import { tableWithWinningsPoints } from './Middle.const'

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

export const resetGameBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard.map((item) => {
    return {
      ...item,
      type: GameItemType.EMPTY,
    }
  })
}

export const emptySquareInBoard = (gameBoard: GameBoardTypes) =>
  gameBoard.filter((item) => item.type === GameItemType.EMPTY)

export const idItemToChange = (emptyElementsInBoard: GameBoardTypes) => {
  return emptyElementsInBoard[Math.floor(Math.random() * emptyElementsInBoard.length)].id
}

export const crossSquareInBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard
    .filter((item) => item.type === GameItemType.CROSS)
    .map((item) => {
      return item.id
    })
}

export const circleSquareInBoard = (gameBoard: GameBoardTypes) => {
  return gameBoard
    .filter((item) => item.type === GameItemType.CIRCLE)
    .map((item) => {
      return item.id
    })
}

export const areTheElementsCorrect = (crossIdArray: Array<number>) => {
  let hasAllElements: boolean = false
  if (crossIdArray.length < 3) return false
  for (let i = 0; i <= 4; i++) {
    hasAllElements = tableWithWinningsPoints[i].every((elem) => crossIdArray.includes(elem))
    if (hasAllElements) return true
  }

  return false
}

export const isTheGameFinish = (crossIdArray: Array<number>, circleArray: Array<number>) => {
  return areTheElementsCorrect(crossIdArray) || areTheElementsCorrect(circleArray)
}

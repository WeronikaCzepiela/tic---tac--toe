import { GameItemType } from '../GameItem/GameItem.types'

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

export const circleSquareInBoard = (gameBoard: GameBoardTypes) =>
  gameBoard
    .filter((item) => item.type === GameItemType.CIRCLE)
    .map((item) => {
      return item.id
    })

export const isTheGameFinish = (crossIdArray: Array<number>) => {
  console.log(crossIdArray)
  return false
}

const tableWithWinningsPoints = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
]

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

export const emptySquareInBoard = (gameBoard: GameBoardTypes) =>
  gameBoard.filter((item) => item.type === GameItemType.EMPTY)

export const idItemToChange = (emptyElementsInBoard: GameBoardTypes) => {
  return emptyElementsInBoard[Math.floor(Math.random() * emptyElementsInBoard.length)].id
}

import { GameItemType } from '../GameItem/GameItem.types'

type GameBoardTypes = Array<{ id: number; type: GameItemType }>
type WinningIdsTypes = Array<{ id1: number; id2: number; id3: number }>
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

export const isTheGameFinish = (gameBoard: GameBoardTypes) => {
  // if (humanWin)
  // return true
  // if (computerWin) return true
  return false
}

const tableWithWinningsPoints: WinningIdsTypes = [
  { id1: 0, id2: 1, id3: 2 },
  { id1: 3, id2: 4, id3: 5 },
  { id1: 6, id2: 7, id3: 8 },
  { id1: 0, id2: 4, id3: 8 },
  { id1: 2, id2: 4, id3: 6 },
]

import { GameBoardTypes } from './Middle.helpers'
import { GameItemType } from '../GameItem/GameItem.types'

export const ANIMATION_TIME = 500

export const WINNING_POINT_COMBINATIONS_MOBILE = [
  {
    combination: [0, 1, 2],
    transform: `translateY(-93px)`,
    width: `330px`,
  },
  {
    combination: [3, 4, 5],
    transform: ``,
    width: `330px`,
  },
  {
    combination: [6, 7, 8],
    transform: `translateY(93px)`,
    width: `330px`,
  },
  {
    combination: [0, 4, 8],
    transform: `rotate(45deg)`,
    width: `430px`,
  },
  {
    combination: [2, 4, 6],
    transform: `rotate(-45deg)`,
    width: `430px`,
  },
  {
    combination: [0, 3, 6],
    transform: `rotate(90deg) translateY(93px)`,
    width: `330px`,
  },
  {
    combination: [1, 4, 7],
    transform: `rotate(90deg)`,
    width: `330px`,
  },
  {
    combination: [2, 5, 8],
    transform: `rotate(90deg) translateY(-93px)`,
    width: `330px`,
  },
]

export const WINNING_POINT_COMBINATIONS_DESKTOP = [
  {
    combination: [0, 1, 2],
    transform: `translateY(-127px)`,
    width: `430px`,
  },
  {
    combination: [3, 4, 5],
    transform: ``,
    width: `430px`,
  },
  {
    combination: [6, 7, 8],
    transform: `translateY(127px)`,
    width: `430px`,
  },
  {
    combination: [0, 4, 8],
    transform: `rotate(45deg)`,
    width: `580px`,
  },
  {
    combination: [2, 4, 6],
    transform: `rotate(-45deg)`,
    width: `580px`,
  },
  {
    combination: [0, 3, 6],
    transform: `rotate(90deg) translateY(127px)`,
    width: `430px`,
  },
  {
    combination: [1, 4, 7],
    transform: `rotate(90deg)`,
    width: `430px`,
  },
  {
    combination: [2, 5, 8],
    transform: `rotate(90deg) translateY(-127px)`,
    width: `430px`,
  },
]

export const gameBoardMock: GameBoardTypes = [
  { id: 0, type: GameItemType.EMPTY },
  { id: 1, type: GameItemType.CIRCLE },
  { id: 2, type: GameItemType.CROSS },
  { id: 3, type: GameItemType.EMPTY },
  { id: 4, type: GameItemType.CROSS },
  { id: 5, type: GameItemType.EMPTY },
  { id: 6, type: GameItemType.EMPTY },
  { id: 7, type: GameItemType.EMPTY },
  { id: 8, type: GameItemType.CIRCLE },
]

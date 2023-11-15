export const ANIMATION_TIME = 500

export const WINNING_POINT_COMBINATIONS = [
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

export enum GameItemType {
  EMPTY = 'empty',
  CIRCLE = 'circle',
  CROSS = 'cross',
}
export interface GameItemTypes {
  id: number
  type: GameItemType
  onClick: (id: number) => void
}

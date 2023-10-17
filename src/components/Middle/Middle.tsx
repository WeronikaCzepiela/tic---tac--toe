import { MiddleStyled } from './Middle.styles'
import { GameItem } from '../GameItem/GameItem'
import { useState } from 'react'
import { GameItemType } from '../GameItem/GameItem.types'
import { computerMove, emptySquareInBoard, humanMove, idItemToChange } from './Middle.helpers'

export const Middle = () => {
  const [count, setCount] = useState(0)

  const [gameBoard, setGameBoard] = useState(
    Array.from({ length: 9 }).map((item, idx) => ({
      id: idx,
      type: GameItemType.EMPTY,
    })),
  )

  const onItemClick = (id: number) => {
    const boardAfterHumanMove = humanMove(gameBoard, id)
    const emptyElementsInBoard = emptySquareInBoard(boardAfterHumanMove)
    const randomId = idItemToChange(emptyElementsInBoard)

    let boardAfterComputerMove = boardAfterHumanMove

    if (emptyElementsInBoard.length) {
      boardAfterComputerMove = computerMove(boardAfterHumanMove, randomId)
    }

    setGameBoard(boardAfterComputerMove)
  }

  return (
    <MiddleStyled>
      <div className={'container'}>
        {gameBoard.map(({ id, type }, idx) => (
          <GameItem type={type} id={id} key={idx} onClick={onItemClick} />
        ))}
      </div>
    </MiddleStyled>
  )
}

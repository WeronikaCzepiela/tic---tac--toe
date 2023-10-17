import { GameItemStyled } from './GameItem.styles'
import { GameItemType, GameItemTypes } from './GameItem.types'
import XIcon from '../../image/x.svg'
import OIcon from '../../image/o.svg'

export const GameItem = ({ id, type, onClick }: GameItemTypes) => {
  const icons = [
    {
      type: GameItemType.CROSS,
      image: <img src={XIcon} color={'#1C6ECF'} height={56} width={60} />,
    },
    {
      type: GameItemType.CIRCLE,
      image: <img src={OIcon} color={'#1C6ECF'} height={56} width={60} />,
    },
  ]

  const handleOnClick = () => {
    if (type === GameItemType.EMPTY) onClick(id)
  }

  return (
    <GameItemStyled>
      <div className={`item item-${id + 1}`} onClick={handleOnClick}>
        {icons.find((item) => item.type === type)?.image}
      </div>
    </GameItemStyled>
  )
}

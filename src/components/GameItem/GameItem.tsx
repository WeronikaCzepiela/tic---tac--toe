import { GameItemStyled } from './GameItem.styles'
import { GameItemType, GameItemTypes } from './GameItem.types'
import XIcon from '../../assets/image/x.svg'
import OIcon from '../../assets/image/o.svg'
import { DIMENSION, useWindowDimensions } from '../../utils'

export const GameItem = ({ id, type, onClick }: GameItemTypes) => {
  const { width } = useWindowDimensions()

  const getCorrectWidthOfIcon = () => {
    if (width > DIMENSION) return 80

    return 60
  }

  const getCorrectHeightOfIcon = () => {
    if (width > DIMENSION) return 76

    return 56
  }

  const icons = [
    {
      type: GameItemType.CROSS,
      image: (
        <img
          src={XIcon}
          color={'#1C6ECF'}
          height={getCorrectHeightOfIcon()}
          width={getCorrectWidthOfIcon()}
        />
      ),
    },
    {
      type: GameItemType.CIRCLE,
      image: (
        <img
          src={OIcon}
          color={'#1C6ECF'}
          height={getCorrectHeightOfIcon()}
          width={getCorrectWidthOfIcon()}
        />
      ),
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

import { getStyleOfLine } from '../Middle/Middle.helpers'
import { LineStyled } from './Line.styles'
import { LineTypes } from './Line.types'

export const Line = ({ transform, width }: LineTypes) => {
  return (
    <LineStyled
      style={{
        transform: transform,
        width: width,
      }}
    />
  )
}

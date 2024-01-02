import { LineStyled } from './Line.styles'
import { LineTypes } from './Line.types'

export const Line = ({ transform, width }: LineTypes) => (
  <LineStyled
    style={{
      transform: transform,
      width: width,
    }}
  />
)

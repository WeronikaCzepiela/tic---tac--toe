import { getStyleOfLine } from '../Middle/Middle.helpers'
import { LineStyled } from './Line.styles'
import { LineType } from './Line.types'

export const Line = ({ id }: LineType) => {
  return (
    <LineStyled>
      <div
        style={{
          transform: getStyleOfLine(id).transform,
          width: getStyleOfLine(id).width,
        }}
      />
    </LineStyled>
  )
}

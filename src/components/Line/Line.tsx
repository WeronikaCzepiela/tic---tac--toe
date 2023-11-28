import { getStyleOfLine } from '../Middle/Middle.helpers'
import { LineStyled } from './Line.styles'

interface LineType {
  id: number
}

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

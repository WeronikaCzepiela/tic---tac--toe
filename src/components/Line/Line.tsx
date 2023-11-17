import { getStyleOfLine } from '../Middle/Middle.helpers'
import { LineStyled } from './Line.styles'

export const Line = (id: number) => {
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

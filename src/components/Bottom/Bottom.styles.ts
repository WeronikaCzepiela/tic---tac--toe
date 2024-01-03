import styled, { css, DefaultTheme } from 'styled-components'

const BottomVariants = (theme: DefaultTheme, variant = 'mobile') =>
  ({
    mobile: css`
      background: pink;
    `,
    desktop: css`
      background: green;
    `,
  })[variant]

export const BottomStyled = styled.header<{ variant: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  ${({ theme, variant }) => BottomVariants(theme, variant)}

  .icons {
    padding-left: 13px;
    gap: 10px;
  }
`

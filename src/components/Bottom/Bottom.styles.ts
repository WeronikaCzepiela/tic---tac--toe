import styled, { css, DefaultTheme } from 'styled-components'

const BottomVariants = (theme: DefaultTheme, variant = 'mobile') =>
  ({
    mobile: css`
      display: flex;
      flex-direction: row;
      font-size: 20px;
      align-items: center;
    `,
    desktop: css`
      width: 100vw;
      font-size: 31px;
      display: flex;
      flex-direction: row;
      justify-content: end;
      padding-right: 38px;
      p {
        margin-top: 15px;
        margin-bottom: 0;
      }
    `,
  })[variant]

export const BottomStyled = styled.header<{ variant: string }>`
  ${({ theme, variant }) => BottomVariants(theme, variant)}

  .icons {
    padding-left: 13px;
    gap: 10px;
  }

  .icons-desktop {
    padding-left: 22px;
    display: flex;
    flex-direction: row;
    gap: 18px;
    padding-bottom: 15px;
  }
`

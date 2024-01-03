import { BottomStyled } from './Bottom.styles'
import LinkedIn from '../../assets/image/linkedIn.svg'
import GitHub from '../../assets/image/gitHub.svg'
import { DIMENSION, useWindowDimensions } from '../../utils'

export const Bottom = () => {
  const { width } = useWindowDimensions()
  const getCorrectVariant = () => {
    if (width > DIMENSION) return 'desktop'

    return 'mobile'
  }

  const getCorrectWidthOfIcon = () => {
    if (width > DIMENSION) return 64

    return 40
  }

  const getCorrectHeightOfIcon = () => {
    if (width > DIMENSION) return 68

    return 38
  }

  return (
    <BottomStyled variant={getCorrectVariant()}>
      <p>Check my accounts</p>
      <div className={`icons ${width > DIMENSION && 'icons-desktop'}`}>
        <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
          <img src={GitHub} width={getCorrectWidthOfIcon()} height={getCorrectHeightOfIcon()} />
        </a>
        <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
          <img src={LinkedIn} width={getCorrectWidthOfIcon()} height={getCorrectHeightOfIcon()} />
        </a>
      </div>
    </BottomStyled>
  )
}

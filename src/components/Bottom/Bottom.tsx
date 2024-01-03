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

  return (
    <BottomStyled variant={getCorrectVariant()}>
      <p>Check my accounts</p>
      <div className={'icons'}>
        <a target={'_blank'} href={'https://github.com/WeronikaCzepiela'}>
          <img src={GitHub} width={40} height={38} />
        </a>
        <a target={'_blank'} href={'https://www.linkedin.com/in/--weronika-czepiela/'}>
          <img src={LinkedIn} width={40} height={38} />
        </a>
      </div>
    </BottomStyled>
  )
}

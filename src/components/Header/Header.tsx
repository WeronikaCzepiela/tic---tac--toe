import { DIMENSION, useWindowDimensions } from '../../utils'
import { HeaderDesktop } from './HeaderDesktop/HeaderDesktop'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'

export const Header = () => {
  const { width } = useWindowDimensions()
  const getCorrectHeader = () => {
    if (width > DIMENSION) return <HeaderDesktop />
    return <HeaderMobile />
  }

  return getCorrectHeader()
}

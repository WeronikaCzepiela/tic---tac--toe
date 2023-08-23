import { GameItemStyled } from './GameItem.style'
import XIcon from  '../../image/x.svg'
import OIcon from '../../image/o.svg'

export const GameItem = () => {
    return <GameItemStyled>
        <div className={'square'}>
            <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>
        </div>
    </GameItemStyled>
}
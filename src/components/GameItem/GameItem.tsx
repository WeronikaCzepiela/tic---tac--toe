import { GameItemStyled } from './GameItem.style'
import XIcon from  '../../image/x.svg'
import OIcon from '../../image/o.svg'
import { GameItemTypes} from "./GameItem.types";

export const GameItem = ({isClicked, isHumanMove, id}: GameItemTypes) => {
    const getCorrectIcon = () => {
        if(isHumanMove) return <img src={OIcon} color={'#1C6ECF'} height={56} width={60}/>
        return <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>
    }

    return <GameItemStyled>
        <div className={'square'}>
            {getCorrectIcon()}
        </div>
    </GameItemStyled>
}
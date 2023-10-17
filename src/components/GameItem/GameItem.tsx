import { GameItemStyled } from './GameItem.styles'
import {GameItemType, GameItemTypes} from "./GameItem.types";
import XIcon from  '../../image/x.svg'
import OIcon from '../../image/o.svg'

export const GameItem = ({id, type}: GameItemTypes) => {
    const getCorrectIcon = () => {
        if(type === GameItemType.CIRCLE) return <img src={OIcon} color={'#1C6ECF'} height={56} width={60}/>
        if(type === GameItemType.CROSS) return <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>
        console.log('dupa')
        return <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>
    }

    return <GameItemStyled>
        <div className={`item item-${id + 1}`}>
            <div onClick={getCorrectIcon}></div>
        </div>
    </GameItemStyled>
}
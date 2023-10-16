import { GameItemStyled } from './GameItem.styles'
import XIcon from  '../../image/x.svg'
import OIcon from '../../image/o.svg'
import {GameItemType, GameItemTypes} from "./GameItem.types";

export const GameItem = ({id, type}: GameItemTypes) => {
    const getCorrectIcon = () => {
        if(type === GameItemType.CIRCLE) return <img src={OIcon} color={'#1C6ECF'} height={56} width={60}/>
        if(type === GameItemType.CROSS) return <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>

        return <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>
    }

    return <GameItemStyled>
        <div className={`item item-${id + 1}`}>
            <img src={XIcon} color={'#1C6ECF'} height={56} width={60}/>
        </div>
    </GameItemStyled>
}
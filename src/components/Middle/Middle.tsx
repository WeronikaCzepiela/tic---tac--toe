import {MiddleStyled} from './Middle.styles'
import {GameItem} from "../GameItem/GameItem";

export const Middle = () => {
    const gameBoard = Array.from({length: 9}).map((item, idx) => {
        return <div className={`item-${idx+1}`}><GameItem/></div>
    })


    return (
        <MiddleStyled>
            <div className={'container'}>
                {gameBoard}
            </div>
        </MiddleStyled>
    )
}
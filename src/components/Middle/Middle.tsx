import {MiddleStyled} from './Middle.styles'
import {GameItem} from "../GameItem/GameItem";
import {useState} from "react";
import {GameItemType} from "../GameItem/GameItem.types";

export const Middle = () => {
    const [count, setCount] = useState(0)

    const [gameBoard, setGameBoard] = useState(Array.from({length: 9}).map((item, idx) => ({
        id: idx,
        type: GameItemType.EMPTY
    })))

    const onItemClick = (id: number) => {

    }

    return (
        <MiddleStyled>
            <div className={'container'}>
                {gameBoard.map(({id, type}, idx) =>
                    <GameItem type={type} id={id} key={idx}/>
                )}
            </div>
        </MiddleStyled>
    )
}
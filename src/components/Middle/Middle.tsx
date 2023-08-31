import {MiddleStyled} from './Middle.styles'
import {GameItem} from "../GameItem/GameItem";
import {useState} from "react";

export const Middle = () => {
    const emptyGrid = Array.from({length: 9}).map((item, idx) => {
        return <div className={`item-${idx+1}`}></div>
    })

    const [count, setCount] = useState(0)

    const [gameBoard, setGameBoard] = useState(emptyGrid.map((item, idx)=>({
        isClicked: false,
        isHumanMove: true,
        id: idx+1
    })))

    const getIconOnClickedArea = (id: number) => {
        const newGameBoard = gameBoard.map((item,idx)=>
            <GameItem isClicked={item.isClicked} isHumanMove={item.isHumanMove} id={id}/>
        )
        return newGameBoard
    }

    const humanMove = () => {
        return {GameItem}
    }
    console.log(getIconOnClickedArea(2))

    return (
        <MiddleStyled>
            <div className={'container'}>
                {emptyGrid}
            </div>
        </MiddleStyled>
    )
}
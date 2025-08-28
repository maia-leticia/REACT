import { useState } from "react"

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onChangeTurn, activePlayer}){

    const [gameBoard, setGameBoard] = useState(initialGame)

    function handleSelectGame(rowIndex, colIndex){
        setGameBoard((prevGame)=>{
            const updateGame = [...prevGame.map(innerArray => [...innerArray])]
            updateGame[rowIndex][colIndex] = activePlayer
            return updateGame
        })
        onChangeTurn()
    }

    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>handleSelectGame(rowIndex, colIndex)}>{symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
                ))
            }
           
        </ol>
    )
}
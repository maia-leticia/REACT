import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log"
import {WINNING_COMBINATIONS} from "./winning-combinations"
import GameOver from "./GameOver"

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function deriveActivePlayer(prevTurn){
  let currentPlayer = "X"

      if (prevTurn.length > 0 && prevTurn[0].player === "X"){
        currentPlayer = "0"
      }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    'X': "Player 1" ,
    '0': "Player 2" ,
  })

  const [gameTurn, setGameTurn] = useState([]) 
  // const [playerTurn, setPlayerTurn] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurn)

    let gameBoard = [...initialGame.map(array => [...array])];

    for(const turn of gameTurn){
        const {player, square} =  turn
        const {row, col} = square

        gameBoard[row][col] = player
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
        winner = players[firstSquareSymbol]
      }
    }

  const hasDraw = gameTurn.length === 9 && !winner

  function handleSquareSymbol(rowIndex, colIndex){
    //setPlayerTurn((curPlayerTurn) => curPlayerTurn === "X" ? "0" : "X")

    setGameTurn((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn)

      const updateTurn = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurn,
      ]

      return updateTurn;
    })
  }

  function handleRestart(){
    setGameTurn([])
  }

  function handlePlayerName(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X" } onChangeName={handlePlayerName}/>
          <Player name="Player 2" symbol="0" isActive={activePlayer === "0"} onChangeName={handlePlayerName}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onChangeTurn={handleSquareSymbol} board={gameBoard}/>
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App

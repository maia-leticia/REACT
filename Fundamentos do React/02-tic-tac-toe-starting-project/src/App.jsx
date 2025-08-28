import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/Gameboard"

function App() {
  
  const [playerTurn, setPlayerTurn] = useState('X')
  function handleSquareSymbol(){
    setPlayerTurn((curPlayerTurn) => curPlayerTurn === "X" ? "0" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={playerTurn === "X" }/>
          <Player name="Player 2" symbol="0" isActive={playerTurn === "0"}/>
        </ol>
        <GameBoard onChangeTurn={handleSquareSymbol} activePlayer={playerTurn}/>
      </div>
    </main>
  )
}

export default App

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard(){
    return(
        <ol id="game-board">
          
            {
                initialGame.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((symbol, colIndex) => 
                            <li key={colIndex}>
                                <button>{symbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
                )
            }
           
        </ol>
    )
}
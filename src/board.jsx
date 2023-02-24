import React, { useState } from 'react';
import './board.css';
import Pieces from './pieces.jsx';

function Board(){
    let board = [8];
    for(let i = 0; i < 8; i++){
        board[i] = [8];
        for(let j = 0; j < 8; j++){
            board[i][j] = 0;
        }
    }
    let n = 0
    function clicked(divKey){
        console.log(divKey);
    }
    
    return (
        <div className="board">
            {board.map((rowVal, row) => (
                <div className="board-row" key={row}>
                    {rowVal.map((squareVal, col) => (
                        <div className={((row + col) % 2) ? "blackSquare" : "whiteSquare"} key={"square-" + row + "-" + col} onClick={() => clicked("square-" + row + "-" + col)}> 
                            {Pieces(row, col)}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Board;
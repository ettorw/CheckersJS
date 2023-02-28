import React, { useState } from 'react';
import '../styles/board.css';
import Piece from './Piece.jsx';
import Square from './Square.jsx';

function Board(){

  const [position, setPosition] = useState([
    ['e', 'b', 'e', 'b', 'e', 'b', 'e', 'b'],
    ['b', 'e', 'b', 'e', 'b', 'e', 'b', 'e'],
    ['e', 'b', 'e', 'b', 'e', 'b', 'e', 'b'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
    ['e', 'w', 'e', 'w', 'e', 'w', 'e', 'w'],
    ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
  ]);

  const [clicked, setClicked] = useState({row: null, col: null})

  
  function handleClick(row, col){
    setClicked({row, col});
    
  }

  return (
    <div className="board">
      {position.map((rowVal, row) => (
        <div className="board-row" key={'row-' + row}>
          {rowVal.map((squareVal, col) => (
            <Square key={"square-" + row + "-" + col} 
              row={row} col={col} 
              isSelected={clicked.row === row && clicked.col === col}
              onClick={() => handleClick(row, col)}
              > 
              <Piece piece={squareVal}></Piece>
            </Square>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Board;
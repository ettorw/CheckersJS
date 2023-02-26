import React, { useState } from 'react';
import './board.css';
import Pieces from './pieces.jsx';
import './gameLogic.js';

function Board(){
  const [color, setColor] = useState([
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
  ])

  const defaultColor = [
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'b', 'w', 'b', 'w', 'b'],
    ['b', 'w', 'b', 'w', 'b', 'w', 'b', 'w'],
  ]

  let board = [8];
  for(let i = 0; i < 8; i++){
    board[i] = [8];
    for(let j = 0; j < 8; j++){
      board[i][j] = 0;
    }
  }

  function clicked(row, col){
    console.log(row + "-" + col);
    if ((row + col) % 2){
      let newColor = defaultColor.slice();
      newColor[row][col] = 's';
      console.log(defaultColor)
      setColor(newColor);
      
    } 
    
  }

  function style(row, col){
    return {backgroundColor: (color[row][col] === 'b') ? '#111111' : ((color[row][col] === 'w') ? '#999999' : '#999000')}
  }
    
  return (
    <div className="board">
      {board.map((rowVal, row) => (
        <div className="board-row" key={row}>
          {rowVal.map((squareVal, col) => (
            <div 
              style={style(row, col)}
              className={((row + col) % 2) ? "blackSquare" : "whiteSquare"} 
              key={"square-" + row + "-" + col} 
              onClick={() => clicked(row, col)}
            > 
              {Pieces(row, col)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Board;
import React, { useState } from 'react';
import '../styles/board.css';
import Piece from './Piece.jsx';
import Square from './Square.jsx';
import Player from './Player.jsx';

function Board(props){

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

  const [clicked, setClicked] = useState({row: null, col: null});

  function jump(row, col){
    let empty = position[row][col] === 'e';
    let byTwo = (Math.abs(clicked.row - row) === 2) && (Math.abs(clicked.col - col) === 2);
    let capture = false;
    if (byTwo && empty){
      let jumpRow = (clicked.row + row) / 2;
      let jumpCol = (clicked.col + col) / 2;
      capture = position[jumpRow][jumpCol] !== 'e';
    }
    return capture;
  }
  
  function move(row, col){
    let empty = position[row][col] === 'e';
    let byOne = (Math.abs(clicked.row - row) === 1) && (Math.abs(clicked.col - col) === 1);
    return byOne && empty;
  }
 
  function handleClick(row, col){
    if (move(row, col)){
      let newPos = position.slice();
      let piece = newPos[clicked.row][clicked.col];
      newPos[row][col] = piece;
      newPos[clicked.row][clicked.col] = 'e';
      setPosition(newPos);
    }
    if (jump(row, col)){
      let newPos = position.slice();
      let piece = newPos[clicked.row][clicked.col];
      newPos[row][col] = piece;
      newPos[clicked.row][clicked.col] = 'e';
      setPosition(newPos);
    }
    setClicked({row, col});
    
  }

  return (
    <>
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
    <Player playerName={props.playerName.black} playerColor="black"></Player>
    <Player playerName={props.playerName.white} playerColor="white"></Player>
    </>
    
  )
}
export default Board;
// npm run deploy

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

  const [turn, setTurn] = useState('w');

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

  function executeMove(row, col){
    let newPos = position.slice();
    let piece = newPos[clicked.row][clicked.col];
    newPos[row][col] = piece;
    newPos[clicked.row][clicked.col] = 'e';
    setPosition(newPos);
    setTurn((piece === 'w') ? 'b' : 'w');
  }

  function executeJump(row, col){
    let newPos = position.slice();
    let piece = newPos[clicked.row][clicked.col];
    newPos[row][col] = piece;
    newPos[clicked.row][clicked.col] = 'e';
    let jumpRow = (clicked.row + row) / 2;
    let jumpCol = (clicked.col + col) / 2;
    newPos[jumpRow][jumpCol] = 'e';
    setPosition(newPos);
    setTurn((piece === 'w') ? 'b' : 'w');
  }
 
  function handleClick(row, col){
    if (clicked.row !== null){
      
      let piece = position[clicked.row][clicked.col];

      if (piece === turn){
        if (move(row, col)){
          executeMove(row, col);
        }
        if (jump(row, col)){
          executeJump(row, col);
        }
      }
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
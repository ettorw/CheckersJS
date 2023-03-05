// npm run deploy

import React, { useState } from 'react';
import '../styles/board.css';
import Piece from './Piece.jsx';
import Square from './Square.jsx';
import Player from './Player.jsx';
import { updatedPosition } from './gameLogic';

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
 
  function handleClick(row, col){
    if (clicked.row !== null){
      let pos1 = JSON.parse(JSON.stringify(position));
      let pos2 = updatedPosition({row: clicked.row, col: clicked.col}, {row: row, col: col}, turn, JSON.parse(JSON.stringify(position)));
      if (JSON.stringify(pos1) !== JSON.stringify(pos2)){
        setPosition(pos2);
        console.log(turn);
        setTurn((turn === 'b') ? 'w' : 'b');
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
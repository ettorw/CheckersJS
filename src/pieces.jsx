import React, { useState } from 'react';

function Pieces(row, col){ 

  const [position, setposition] = useState([
    ['e', 'b', 'e', 'b', 'e', 'b', 'e', 'b'],
    ['b', 'e', 'b', 'e', 'b', 'e', 'b', 'e'],
    ['e', 'b', 'e', 'b', 'e', 'b', 'e', 'b'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
    ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
    ['e', 'w', 'e', 'w', 'e', 'w', 'e', 'w'],
    ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'],
  ])

  return(
    <div className={(position[row][col] === 'e') ? "noPiece" : ((position[row][col] === 'b') ? "blackPiece" : "whitePiece")} key={"piece-" + row + "-" + col}></div>
  )
}

export default Pieces;
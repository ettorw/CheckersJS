import React, { useState } from 'react';



function Pieces(row, col){ 

    const [position, setposition] = useState([
        [0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 2, 0],
    ])

    return(
        <div className={(position[row][col] === 0) ? "noPiece" : ((position[row][col] === 1) ? "blackPiece" : "whitePiece")} key={"piece-" + row + "-" + col}></div>
    )
}

export default Pieces;
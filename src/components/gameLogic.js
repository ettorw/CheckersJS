function updatedPosition(current, desired, player, currentPos){
  if (currentPos[current.row][current.col] === player){
    if ((current.row - desired.row > 0) ? player === 'b' : player === 'w') {
      let empty = currentPos[desired.row][desired.col] === 'e';
      let byOne = (Math.abs(current.row - desired.row) === 1) && (Math.abs(current.col - desired.col) === 1);
      let byTwo = (byOne) ? false : (Math.abs(current.row - desired.row) === 2) && (Math.abs(current.col - desired.col) === 2);
      if (empty && byOne){
        return executeMove(current, desired, currentPos);
      } else if (byTwo && empty) {
        let enemyPiece = (player === 'w') ? 'b' : 'w';
        let jumpRow = (current.row + desired.row) / 2;
        let jumpCol = (current.col + desired.col) / 2;
        let capture = currentPos[jumpRow][jumpCol] === enemyPiece;
        if (capture){
          return executeJump(current, desired, currentPos)
        }
      }
    }
  }
  return currentPos;
}


function executeMove(current, desired, currentPos){
  let newPos = currentPos.slice();
  newPos[desired.row][desired.col] = currentPos[current.row][current.col];
  newPos[current.row][current.col] = 'e';
  return newPos;
}

function executeJump(current, desired, currentPos){
  let newPos = currentPos.slice();
  newPos[desired.row][desired.col] = currentPos[current.row][current.col];
  newPos[current.row][current.col] = 'e';
  newPos[(current.row + desired.row) / 2][(current.col + desired.col) / 2] = 'e';
  return newPos;
}

export {updatedPosition};
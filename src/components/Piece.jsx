
function Piece(props){ 
  console.log(props.piece)
  return(
    <div 
      className={(props.piece === 'e') ? "noPiece" : ((props.piece === 'b') ? "blackPiece" : "whitePiece")} 
    >
    </div>
  );
}

export default Piece;
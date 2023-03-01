
function Piece(props){ 
  return(
    <div 
      className={(props.piece === 'e') ? "noPiece" : ((props.piece === 'b') ? "blackPiece" : "whitePiece")} 
    >
    </div>
  );
}

export default Piece;
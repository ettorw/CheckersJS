
function Square(props) {
  function handleClick(){
    if ((props.row + props.col) % 2){
      props.onClick(props.row, props.col)
    }
  }
  return (
    <div
      className={(props.isSelected) ? 'selectedSquare' : (((props.row + props.col) % 2) ? "blackSquare" : "whiteSquare")} 
      onClick={() => handleClick()}
    >   
      {props.children}
    </div>
  );
}

export default Square;

function Player(props){
  return (
    <div 
      id={props.playerColor + "Player"}
    >
      <div id={props.playerColor + "Icon"}></div>
      <div>{props.playerName}</div>
    </div>
  );
}

export default Player
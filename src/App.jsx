import Board from "./components/Board";

function App() {
  return (
    <>
    <h1 id="title">Checkers JS</h1>
    <div className="board-container">
      <Board playerName={{white: "WhitePlayer", black: "BlackPlayer"}}></Board>
    </div>
    </>
  )
}

export default App;

import Board from "./board";

function App() {
  return (
    <>
    <h1 id="title">Checkers JS</h1>
    <div className="board-container">
      {Board()}
    </div>
    </>
  )
}

export default App;

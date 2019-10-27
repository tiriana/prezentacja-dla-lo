import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pacman from "pacman-react";
import "react-minesweeper/lib/minesweeper.css";
import Minesweeper from "react-minesweeper";

const Tetris = require("react-tetris");

const MyTetris = () => (
  <Tetris>
    {({ HeldPiece, Gameboard, PieceQueue, points, linesCleared }) => {
      return <Gameboard />;
    }}
  </Tetris>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Minesweeper
          onWin={() => console.log("GAME WON")}
          onLose={() => console.log("GAME LOST")}
          bombChance={0.1} // 15% chance that a field will contain a bomb
          width={40} // amount of fields horizontally
          height={25} // amount of fields vertically
        />
      </header>
    </div>
  );
}

export default App;

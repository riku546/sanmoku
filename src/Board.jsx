import { useState } from "react";
import "./index.css";

function Board() {
  const defaultBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [board, setBoard] = useState(defaultBoard);
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(0);

  const winnerCheck = (board) => {
    let point = [];
    let winner = 0;
    // console.log(board)
    board.forEach((row, rowIndex) => {
      // console.log(rowIndex)
      row.forEach((i) => {
        if (i === 0) return;
        point.push(i);
        if (point[0] === 0) return;
        // console.log(i);
        if (point[0] === point[1] && point[0] === point[2]) {
          winner = point[0];

        }
        console.log(point);
      });
      point = []
    });
    return winner;
  };

  const clickHandler = (y, x) => {
    const newBoard = [...board];
    newBoard[y][x] = turn;
    setBoard(newBoard);
    const winner = winnerCheck(newBoard);
    // console.log(winner);
    setWinner(winner);
    setTurn((prev) => 3 - prev);
  };

  return (
    <>
      <h3>{winner !== 0 ? "winner: " + winner : "turn: " + turn}</h3>

      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="cell"
                onClick={() => clickHandler(rowIndex, cellIndex)}
              >
                <div className="stone">{cell === 0 ? "" : cell}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Board;

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
        // console.log(point);
      });
      point = [];
    });
    if (winner === 0) {

    }
    return winner;
  };

  const rowToColumn = () => {
    const arr = [...board];
    const arrTotal = [];
    const arr0 = [];
    const arr1 = [];
    const arr2 = [];

    arr.map((row, rowIndex) => {
      row.map((i, index) => {
        if (index === 0) {
          arr0.push(i);
        } else if (index === 1) {
          arr1.push(i);
        } else {
          arr2.push(i);
        }
      });
    });

    arrTotal.push(arr0);
    arrTotal.push(arr1);
    arrTotal.push(arr2);

    let point = [];
    let winner = 0;
    // console.log(board)
    arrTotal.forEach((row, rowIndex) => {
      // console.log(rowIndex)
      row.forEach((i) => {
        if (i === 0) return;
        point.push(i);
        if (point[0] === 0) return;
        // console.log(i);
        if (point[0] === point[1] && point[0] === point[2]) {
          winner = point[0];
        }
        // console.log(point);
      });
      point = [];
    });

    return winner;

    // winnerCheck(arrTotal)
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
      <h3>{winner !== 0 ? "Winner: " + winner : "Turn: " + turn}</h3>

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

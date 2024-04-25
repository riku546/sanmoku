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

  return (
    <div className="board">
      {/* {board.map((row) => {
        row.map((i) => {
          console.log(i);

          <div className="cell" key={row}>
            <div className="stone" key={i}>
              <h1>1</h1>
            </div>
          </div>;
        });
      })} */}
      {board.map((row, index) => {
        {row.map((i) => {
         
          return <li>{i}</li>
          
        })};
      })}
    </div>
  );

  // return (
  //   <div className="board">
  //     {board.map((row, rowIndex) => (
  //       <div key={rowIndex} className="row">
  //         {row.map((cell, cellIndex) => (
  //           <div key={cellIndex} className="cell">
  //             <div className="stone">{cell === 0 ? "" : cell}</div>
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default Board;

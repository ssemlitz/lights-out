import { useState } from "react";
import Cell from '../Cell/Cell'
import style from './Board.module.css'

const Board = ({nrows = 5, ncols = 5, chanceLightStartsOn = 0.25}) => {

  // let chanceLightStartsOn = .5
  // let nrows = 5
  // let ncols = 5
  // const {chanceLightStartsOn, ncols, nrows} = props

  const [board, setBoard] = useState(createBoard())
  const [hasWon, setHasWon] = useState(false)

  console.log(board)


  function createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }
  
  function flipCellsAroundMe(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const boardCopy = oldBoard.map(row => [...row]);

      flipCell(y, x, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      
      let hasWon = board.every(row => row.every(cell => !cell))
      
      setHasWon(hasWon)
      console.log(hasWon);
      return boardCopy;
    });
  }

  

  function makeTable() {
    let tblBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={board[y][x]}
            flipCellsAroundMe={() => flipCellsAroundMe(coord)}
            coord={coord}
            />
            );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    console.log('this is table board', tblBoard)
    return (
      <table className={style.Board}>
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }

  const handleReset = () => {
    setBoard(createBoard())
    setHasWon(false)
  }
  
  return ( 
      <div>
        {hasWon ? (
          <div className={style.winner}>
            <div className={style.winnerText}>
              <span className={style.neonOrange}>YOU</span>
              <span className={style.neonBlue}>WIN!</span>
            </div>
            <button  className={style.resetBtn} onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <div>
            <div className={style.BoardTitle}>
              <div className={style.neonOrange}>Lights</div>
              <div className={style.neonBlue}>Out</div>
            </div>
            {makeTable()}
          </div>
        )}
      </div>
  );
}

export default Board;
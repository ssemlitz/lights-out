import { useState } from "react";
import Cell from '../Cell/Cell'
import style from './Board.module.css'

const Board = (props) => {

  let chanceLightStartsOn = .5
  let nrows = 5
  let ncols = 5
  // const {chanceLightStartsOn, ncols, nrows} = props

  const [board, setBoard] = useState(createBoard())
  const [hasWon, setHasWon] = useState(false)

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
    
    let [y, x] = coord.split('-').map(Number)
    
    // let y = coord.split('-').map(Number)[0]
    // let x = coord.split('-').map(Number)[1]
    
    function flipCell(y, x) {
      
      console.log('INSIDE OF FLIPCELL', [y, x])

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        console.log('******', board[y][x])
        board[y][x] = !board[y][x]
      }
    }


    flipCell(y, x); //Flip initial cell
    flipCell(y, x - 1); //flip left
    flipCell(y, x + 1); //flip right
    flipCell(y - 1, x); //flip below
    flipCell(y + 1, x); //flip above

    let hasWon = board.every(row => row.every(cell => !cell))

    setBoard(board)
    setHasWon(hasWon)
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

  return ( 
    <>
      <div>
        {hasWon ? (
          <div className={style.winner}>
            <span className={style.neonOrange}>YOU</span>
            <span className={style.neonBlue}>WIN!</span>
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
    </>
  );
}

export default Board;
import style from './Cell.module.css'

const Cell = (props) => {

  const { isLit, flipCellsAroundMe, coord } = props

  // function handleClick () {
  //   console.log('the cell was clicked', coord);
  //   flipCellsAroundMe()
  // }

  return ( 
    <>
      <td className={isLit ? `${style.CellLit}` : `${style.Cell}`} onClick={flipCellsAroundMe}/>
    </>
  );
}

export default Cell;
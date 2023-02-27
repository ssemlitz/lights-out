import style from './Cell.module.css'

const Cell = (props) => {

  const { isLit, flipCellsAroundMe } = props

  return ( 
    <>
      <td className={isLit ? `${style.CellLit}` : `${style.Cell}`} onClick={flipCellsAroundMe}/>
    </>
  );
}

export default Cell;
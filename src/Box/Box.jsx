import style from './Box.module.css'

const Box = (props) => {

  const {handleClick, color} = props
  
  return ( 
      <div onClick={() => handleClick()} className={style.Box} style={{ backgroundColor: color }} />
  );
}

export default Box;
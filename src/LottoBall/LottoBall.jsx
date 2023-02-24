import React from 'react'
import style from './LottoBall.module.css'

const LottoBall = ({num}) => {
  return ( 
    <>
      <div className={style.Ball}>{num}</div>
    </>
  );
}

export default LottoBall;
import React from "react";
import style from './Coin.module.css'

const Coin = ({ side }) => {
  return ( 
    <>
      <img src={side} alt='silver coin' className={style.Coin} />
    </>
  );
}

export default Coin;


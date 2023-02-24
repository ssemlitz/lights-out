import React from "react"; 
// import SideDie from "../SideDie/SideDie";
import style from './Dice.module.css'

const Dice = ({ num, shake }) => {
  return ( 
    <>
      <div className={style.DiceDiv}>
        <i className={`fas fa-dice-${num} ${style.Die} ${shake && style.shaking}`}></i>
      </div>
    </>
  );
}

export default Dice;
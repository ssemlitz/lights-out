import React, { useState } from "react";
import Dice from "../Dice/Dice";
import style from './RollDice.module.css'

const RollDice = () => {

  const [die1, setDie1] = useState('one')
  const [die2, setDie2] = useState('one')
  const [shake, setShake] = useState(false)
  const [disableRoll, setDisableRoll] = useState(false)

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six']

  function rollDice (event) {
    setShake(true)
    setDisableRoll(true)
    setTimeout(() => {
      setDie1(numbers[Math.floor(Math.random() * numbers.length)])
      setDie2(numbers[Math.floor(Math.random() * numbers.length)])
      setShake(true)
      setDisableRoll(false)
    }, 775)
    setShake(false)
  }

  return ( 
    <>
    <div className={style.RollDice}>
      <div className={style.DiceDiv}>
        <Dice num={die1} shake={shake}/>
        <Dice num={die2} shake={shake}/>
      </div>
      <button onClick={rollDice} disabled={disableRoll}>{disableRoll ? 'Rolling...' : 'Roll Dice'}</button>
    </div>
    </>
  );
}

export default RollDice;
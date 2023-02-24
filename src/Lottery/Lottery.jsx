import React, { useState } from "react";
import LottoBall from "../LottoBall/LottoBall";
import style from './Lottery.module.css'

// props = title, numBalls, maxNum
// state = nums representing balls

const Lottery = ({title = 'Lotto', maxBalls = 6, maxNum = 40}) => {
  
  const [nums, setNums] = useState(Array.from({ length: maxBalls }))

  function generate() {
    setNums([...nums.map(n => (
      n = Math.floor(Math.random() * maxNum) + 1
    ))])
  }

  function handleClick() {
    generate()
  }
  
  return ( 
    <>
    <section className={style.Lottery}>
      <h1>{title}</h1>
      <div>{nums.map(n => <LottoBall num={n} />)}</div>
      <button onClick={handleClick}>Generate Numbers</button>
    </section>
    </>
  );
}

export default Lottery;

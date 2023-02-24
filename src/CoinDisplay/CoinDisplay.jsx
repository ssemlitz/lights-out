import React, { useState } from "react";
import Coin from "../Coin/Coin";
import style from './CoinDisplay.module.css'

const CoinDisplay = () => {

  const options = ['heads', 'tails']

  const [side, setSide] = useState('./images/BatHeads.png')
  const [numFlips, setNumFlips] = useState(0)
  const [numHeads, setNumHeads] = useState(0)
  const [numTails, setNumTails] = useState(0)

  function flipCoin() {
    setNumFlips(numFlips + 1)
    let result = options[Math.floor(Math.random()* options.length)]
    setSide(result)
    if (result === 'heads'){
      setNumHeads(numHeads + 1)
      setNumFlips(numFlips + 1)
      setSide('./images/BatHeads.png') 
    }
    if (result === 'tails'){
      setNumTails(numTails + 1)
      setNumFlips(numFlips + 1)
      setSide('./images/BatTails.png')
    }
  }

  const handleClick = (event) => {
    flipCoin()
  }

  const handleResetClick = (event) => {
    setNumFlips(0)
    setNumHeads(0)
    setNumTails(0)
    setSide('./images/BatHeads.png')
  }

  return ( 
    <>
      <section className={style.Container}>
        <Coin side={side}/>
        <button onClick={handleClick}>Flip Me!</button>
        <p>Out of {numFlips}, there have been {numHeads} heads and {numTails} tails</p>
        <button onClick={handleResetClick}>Reset</button>
      </section>
    </>
  );
}

export default CoinDisplay;
import { useState } from "react";
import style from "./Hangman.module.css";
import img0 from './0.jpg'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import { randomWord } from "./words";

const Hangman = (props) => {

  // const [maxWrong, setMaxWrong]= useState(6)
  const images = [img0, img1, img2, img3, img4, img5, img6]
  const { maxWrong } = props

  const [nRight, setNRight] = useState(0)
  const [nWrong, setNWrong] = useState(0)
  const [guessed, setGuessed] = useState(new Set())
  const [answer, setAnswer] = useState(randomWord())
  
  function guessedWord() {
    console.log('this is answer', answer)
    const answerArray = answer.split("")
    const theAnswer = answerArray.map(ltr => (guessed.has(ltr) ? ltr : "_"));
    return theAnswer
  }

  function handleGuess(evt) {
    let ltr = evt.target.value;
    setGuessed(guessed.add(ltr))
    setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    setNRight(nRight + (answer.includes(ltr) ? 1 : 0))
  }

  function resetGame(){
    setNWrong(0)
    setGuessed(new Set())
    setNRight(0)
    setAnswer(randomWord())
  }

  /** generateButtons: return array of letter buttons to render */
  function generateButtons() {
    const letter = "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, idx) => (
      <button
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
        key={idx}
      >
        {ltr}
      </button>
    ));
    return letter
  }

  let gameState = generateButtons()
  const isWinner = guessedWord().join('') === answer
  const gameOver = nWrong >= maxWrong
  if (isWinner) gameState = 'You win'
  if (gameOver) gameState = 'You lose'

  return (
    <>
    <div className={style.Hangman}>
      <h1>Hangman</h1>
      {!gameOver ? <img src={images[nWrong]} alt='source'/> : ''}
      <p>Number of incorrect guesses: {nWrong}</p>
      <p className={style.HangmanWord}>
        {!gameOver ? guessedWord() : answer }
      </p>
      <p className={style.HangmanBtns}>{gameState}</p>
      <p>
      </p>
      <button id={style.resetBtn} onClick={()=>resetGame()}>Reset Game</button>
    </div>
    </>
  );
}


export default Hangman;

import { useState } from "react";
import Box from "../Box/Box";
import style from './BoxDisplay.module.css'

const BoxDisplay = ({ numBoxes }) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lilac', 'teal', 'pink', 'maroon', 'black', 'tan']
  
  const [boxColors, setBoxColors] = useState(
    Array.from({length: numBoxes}).map(() => (
      getRandomColor(colors)
    ))
  )

  function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function handleClick(oldColor, boxIdx) {

    const otherColors = colors.filter((boxColor) => (
      boxColor !== oldColor 
    ))

    const newColor = [...boxColors].map((boxColor, idx) => {
      let element
      if (idx === boxIdx){
        element = getRandomColor(otherColors)
      } else {
        element = boxColor
      }
      return element
    })
    setBoxColors(newColor)
  }

  return ( 
    <div className={style.boxContainer}>
      {boxColors.map((box, idx)=>(
        <Box key={'box-instance-' + (idx)} handleClick={() => handleClick(box, idx)} color={box} />
      ))}
    </div>
  );
}

export default BoxDisplay;
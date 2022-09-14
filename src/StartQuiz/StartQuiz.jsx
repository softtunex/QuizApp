import React, { useState } from 'react'
import "./StartQuiz.css"
const StartQuiz = (props) => {
    
  return (
    <div className='StartQuiz'>
        <h1>Quizzical</h1>
       <p>This is a quiz on Music, Goodluck</p>
        <button onClick={props.setQuiz}>Start quiz</button>
        
    </div>
  )
}

export default StartQuiz
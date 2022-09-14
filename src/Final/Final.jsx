import React from 'react'
import "./Final.css"
const Final = ({newQuiz,score}) => {
    return (
        <div className='Final'>
            <h1>Completed</h1>
           <h4>Your Total score is {score}</h4>
           <button className='play' onClick={newQuiz}>Play Again</button>
            
        </div>
      )
}

export default Final
// import React, { useState } from 'react'
import StartQuiz from './StartQuiz/StartQuiz'
import "./App.css"
import Quiz from './Quiz/Quiz'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Final from './Final/Final';


const App = () => {
  const [quiz,setQuiz] = useState(false)
  const [ques,setQues] = useState()



  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple")
      .then(res=>res.json())
      .then(data=>(setQues(data.results)))
  },
  
  
  [!quiz])

  return (
    <div className='App'>
      
  <Routes>
  <Route path='/' element={!quiz && <StartQuiz quiz={quiz} setQuiz={()=>setQuiz(!quiz)}/>}/>
       
      </Routes>

      {quiz && <Quiz ques={ques} setQues={setQues} quiz={quiz} setQuiz={setQuiz}/>}
    </div>
  )
}

export default App
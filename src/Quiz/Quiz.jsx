import React, { useEffect, useState} from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router';
import "./Quiz.css"
import Final from '../Final/Final';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



const Quiz = ({ques,quiz,setQuiz,setQues}) => {
  const [options, setOptions]=useState()
  const [select, setSelect]= useState({
    isSel:"",
    isClicked:false
  })
  const [questions, setQuestions]=useState(0)
  const [error, setError]=useState("")
  const [end, setEnd]=useState(false)
  const [score,setScore] = useState(0)
  const [submit,setSubmit] = useState(true)
  let navigate = useNavigate();
 
  useEffect(()=>{
      setOptions(
        ques && 
        handlerandom([
          ques[questions]?.correct_answer,
           ...ques[questions]?.incorrect_answers
          ])
          )
          
    },[questions,ques])
// console.log(options)
  function handlerandom(option){
    return option.sort(()=>Math.random()-0.5)
  }
  
const handleClick=(id)=>{
  setSelect(sel=>{
    return {isSel: id, isClicked: !sel.isClicked} 
  })
  setScore((id===ques[questions]?.correct_answer)?score+5:score+0)
  

}
const handleStyle =(id)=>{
  return (select.isSel===id 
          && select.isSel===ques[questions]?.correct_answer)?"correct":(select.isSel===id && select.isSel!==ques[questions]?.correct_answer)?"wrong":(id===ques[questions]?.correct_answer)?"correct":""
  
}
const handleNext=()=>{
  if(questions===ques.length-1){
    setEnd(true)
  }
 else if (select.isClicked) {
    setQuestions(qtion=>qtion+1)
    setSelect(sel=>{
      return {isSel:"",isClicked:false} 
    });
  } else setError(alert("Please select an option first"));
  
}

  const question = 
  submit && ques &&
      <div className='allQuiz'>
      <h1>{ques[questions]?.question}</h1>
      {options && options.map(ans=>
      <div className='answer'>
      <button 
        className={`ansBtn  ${select.isClicked && handleStyle(ans)}`}
        onClick={()=>handleClick(ans)}
        disabled={select.isClicked&&"disable"}
         >
        {ans}
        </button></div>)}
      <hr/>
    </div>
      
      function handleSubmit(){
        navigate('/final')
        setSubmit(!submit)
      }
      function newQuiz(){
        navigate('/')
        setQuiz(!quiz)
      }
    
  return (
    
    <div className='quizBody'>
      {
        submit?
      <Header score={score}/>: <Routes><Route path='/final' element={<Final newQuiz={newQuiz} score={score}/>}/></Routes>
}
      {question}
      {
        submit &&
      <div className='next-body'>
      {end?<button className='next' onClick={handleSubmit}>Submit</button>:<button className='next' onClick={handleNext} disabled={end&& "disable"}>Next</button>}
      
      </div>
}
    </div>
  )
}

export default Quiz
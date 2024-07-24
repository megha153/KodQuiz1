import React from 'react'
import './quiz.css'
import { data } from '../../Data'
import { useState } from 'react'

export default function Quiz() 
{
  //to give the indexes
  const [index, setIndex] = useState(0);
  //to go to the next question
  const [question, setQuestion] = useState(data[index]);
  //to display the total score at last
  const [score, setScore] = useState(0);
  //for checking question is last or not
  const [isLastPage, setIsLastPage] = useState(false);
  //to check that user has not selected the same answer multiple times
  const [lock , setLock] = useState(false);
  
  function nextQuestion()
  {
    setLock(false);//after entering next question 
    //not last question
    if(index<data.length-1)
    {
      setIndex(index+1)
      setQuestion(data[index+1])
    }
    //last question
    else
    {
      setIsLastPage(true);
    }
  }

  function checkAnswer(e,ans)  //e= html element(Questions options)
  {
    if(lock === false)
    {
      if(ans === question.ans)//if selected answer matches with the answer given in data then score will be increased by 1
        {
          setScore(score + 1);
          e.target.classList.add('correct');
        }
        else{
          e.target.classList.add('incorrect');
        }
        setLock(true);//if lock is false and answer is selected once then lock will become true
    }
  }
  
  if(isLastPage === true)
    {
      return(
      <h2>Quiz score = {score}</h2>
      )
    }

  /*if(isLastPage === true)
  {
    return(
    <h2>Congrats, quiz finished</h2>
    )
  }*/
  
  return (
    <div className='quiz'>
    <h1>Kod Quiz</h1>
    <h3>{question.question}</h3>
    <ul>
      <li onClick={(e)=> {checkAnswer(e,'1')}}>{question.option1}</li>
      <li onClick={(e)=> {checkAnswer(e,'2')}}>{question.option2}</li>
      <li onClick={(e)=> {checkAnswer(e,'3')}}>{question.option3}</li>
      <li onClick={(e)=> {checkAnswer(e,'4')}}>{question.option4}</li>
      
    </ul>
    <button onClick={nextQuestion}>NEXT</button>
    <div>Question: {index+1} of {data.length}</div>
    </div>
  )


  /*return (
    <div className='quiz'>
    <h1>Kod Quiz</h1>
    <h3>{question.question}</h3>
    <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
    </ul>
    <button onClick={nextQuestion}>NEXT</button>
    <div>Question: {index+1} of {data.length}</div>
    </div>
  )*/
}
 

import type { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'


interface QuestionProps {
  setAnswers: Dispatch<SetStateAction<("white" | "green" | "red")[]>>
  answers: ("white" | "green" | "red")[]
  index: number
  setIndex: Dispatch<SetStateAction<number>>
}

const Question: NextPage = ({setAnswers, answers, index, setIndex}: QuestionProps) => {

  const handleAnswer = (answer: 'red' | 'green') => {
    setAnswers(answers.map((a, i) => i === index ? answer : a))
  }

  return (
    <div>
      { index < 5 ? <div><button onClick={() => handleAnswer('red')}>napicu</button>
       <button onClick={() => handleAnswer('green')}>popici</button> <button onClick={() => setIndex(index+1)}>dalej</button> </div> : <div>end</div>
      }
    </div>
  )
}

export default Question
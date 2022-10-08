import type { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import Button from '../components/Button'
import { useState } from 'react'
import Sphere from '../components/Sphere'



interface QuestionProps {
  setAnswers: Dispatch<SetStateAction<("white" | "green" | "red")[]>>
  answers: ("white" | "green" | "red")[]
  index: number
  setIndex: Dispatch<SetStateAction<number>>
  data: {
    text: string
    firstOption: string
    firstHeadline: string
    secondOption: string
    secondHeadline: string
    thirdOption: string
    thirdHeadline: string
    correctAnswers: ('green' | 'red')[]
  }[]
}

const Question: NextPage<QuestionProps> = ({setAnswers, answers, index, setIndex, data}) => {

  const handleAnswer = (answer: 'red' | 'green', index: number, num: number) => {
    if (!click) {
      setAnswers(answers.map((a, i) => i === index ? answer : a))
      setQuestions(questions.map((a, i) => i === num ? answer : a))
      setClick(true)
    }
  }

  const next = () => {
    if (click) {
      setIndex(index + 1)
      setQuestions(questions.map((a) => a = 'white'))
      setClick(false)
      }
  }


  const [click, setClick] = useState(false)

  const [questions, setQuestions] = useState(['white', 'white', 'white'])

  return (
    <div>
      { index < 5 ? 
        <div>
          <div className='text-red mx-8 extra-bold'>
            <div>1. Nová </div>
            <div className='pl-7'>Automobilka </div>
          </div>
          <div className='text-justify text-black font-bold mx-8 my-2 text-sm italic text-opacity-70'>
            {data[index].text}
          </div>
          <div className='bg-black pt-2 rounded-t-3xl'>
            <div className='flex justify-between items-center px-24 pt-4'>
              <Sphere answer={answers[0]} active={index == 0}/>
              <Sphere answer={answers[1]} active={index == 1}/>
              <Sphere answer={answers[2]} active={index == 2}/>
              <Sphere answer={answers[3]} active={index == 3}/>
              <Sphere answer={answers[4]} active={index == 4}/>
            </div>
          <div className='m-8'>
            <div className={`text-${questions[0]} special-font text-[20px]`} onClick={() => handleAnswer(data[index].correctAnswers[0], index, 0)}>{data[index].firstOption}</div>
            <div className='text-white text-opacity-50 text-xs mx-8'>{data[index].firstHeadline}</div>
          </div>
          <div className='m-8  text-end'>
            <div className={`text-${questions[1]} special-font text-[20px]`} onClick={() => handleAnswer(data[index].correctAnswers[1], index, 1)}>{data[index].secondOption}</div>
            <div className='text-white text-opacity-50 text-xs mx-8'>{data[index].secondHeadline}</div>
          </div>
          <div className='m-8'>
            <div className={`text-${questions[2]} special-font text-[20px]`} onClick={() => handleAnswer(data[index].correctAnswers[2], index, 2)}>{data[index].thirdOption}</div>
            <div className='text-white text-opacity-50 text-xs mx-8'>{data[index].thirdHeadline}</div>
          </div>
          <div className='absolute bottom-5 right-5'>
            <Button onClick={() => next()}>Ďalej</Button>
          </div>
        </div>
       </div> : <div>end</div>
      }
    </div>
  )
}

export default Question
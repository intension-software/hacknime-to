import type { NextPage } from 'next'
import { Dispatch, SetStateAction } from 'react'
import Button from '../components/Button'
import { useState } from 'react'
import Sphere from '../components/Sphere'
import Link from 'next/link'



interface QuestionProps {
  setAnswers: Dispatch<SetStateAction<("white" | "green" | "red")[]>>
  answers: ("white" | "green" | "red")[]
  index: number
  setIndex: Dispatch<SetStateAction<number>>
  data: {
    headline: string
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
      setQuestions(questions.map((a: string, i: number) => i === num ? answer : a && 'green' === data[index].correctAnswers[i] ? 'green' : a))
      setClick(true)
    }
  }

  const next = () => {
    if (click) {
      setIndex(index + 1)
      setQuestions(questions.map((a: string) => a = 'white'))
      setClick(false)
      }
  }

  const [click, setClick] = useState(false)

  const [questions, setQuestions] = useState(['white', 'white', 'white'])

  return (
    <div>
      <div>
        <div className="bg-white rounded-b-3xl">
          <div className='text-red mx-8 extra-bold'>
            <div>{data[index].headline} </div>
          </div>
          <div className='text-justify text-black font-bold mx-8 pb-8 text-sm italic text-opacity-70'>
            {data[index].text}
          </div>
        </div>
        <div className=''>
          <div className='flex justify-between items-center px-24 pt-4'>
            <Sphere answer={answers[0]} active={index == 0}/>
            <Sphere answer={answers[1]} active={index == 1}/>
            <Sphere answer={answers[2]} active={index == 2}/>
            <Sphere answer={answers[3]} active={index == 3}/>
            <Sphere answer={answers[4]} active={index == 4}/>
          </div>
        <div className='mx-8 mb-8 mt-6'>
          <div className={`text-${questions[0]} special-font text-[20px]`} onClick={() => handleAnswer(data[index].correctAnswers[0], index, 0)}>{data[index].firstOption}</div>
          <div className='text-white text-opacity-50 text-xs mx-8'>{data[index].firstHeadline}</div>
        </div>
        <div className='m-8  text-end'>
          <div className={`text-${questions[1]} special-font text-[20px]`} onClick={() => handleAnswer(data[index].correctAnswers[1], index, 1)}>{data[index].secondOption}</div>
          <div className='text-white text-opacity-50 text-xs mx-8'>{data[index].secondHeadline}</div>
        </div>
        <div className='m-8 mb-16'>
          <div className={`text-${questions[2]} special-font text-[20px]`} onClick={() => handleAnswer(data[index].correctAnswers[2], index, 2)}>{data[index].thirdOption}</div>
          <div className='text-white text-opacity-50 text-xs mx-8'>{data[index].thirdHeadline}</div>
        </div>
        <div className='fixed bottom-5 right-5'>
          { index != 4 ? <Button onClick={() => next()}>Ďalej</Button> : <Link href="/dashboard" passHref><Button>Dokončiť</Button></Link>}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Question
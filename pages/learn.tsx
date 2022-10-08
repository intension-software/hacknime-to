import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../public/images/logoVariant3.svg'
import Button from '../components/Button'
import profile from '../public/images/Profile.svg'
import Sphere from '../components/Sphere'
import Question from '../components/Question'

const Learn: NextPage = () => {
  const [index, setIndex] = useState(0)

  const [answers, setAnswers] = useState<("white" | "green" | "red")[]>(["white", "white", "white", "white","white"])

  return (
    <div>
      <header className='py-10 px-8 h-4'>
        <div className='flex justify-between items-center'>
          <Image src={logo} alt="logo of InfoMentor" />
          <Sphere answer={answers[0]} active={index == 0}/>
          <Sphere answer={answers[1]} active={index == 1}/>
          <Sphere answer={answers[2]} active={index == 2}/>
          <Sphere answer={answers[3]} active={index == 3}/>
          <Sphere answer={answers[4]} active={index == 4}/>
          <Image src={profile} alt="logo of InfoMentor" />
        </div>
      </header>
      <div>
        <Question setAnswers={setAnswers} answers={answers} index={index} setIndex={setIndex}/>
      </div>
    </div>
  )
}

export default Learn
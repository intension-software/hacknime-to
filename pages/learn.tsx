import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../public/images/logoVariant4.svg'
import Button from '../components/Button'
import profile from '../public/images/Profile.svg'
import Question from '../components/Question'

const data: {
    headline: string
    text: string
    firstOption: string
    firstHeadline: string
    secondOption: string
    secondHeadline: string
    thirdOption: string
    thirdHeadline: string
    correctAnswers: ('green' | 'red')[]
}[] = [
  {
    headline: '1. Nová automobilka',
    text: 'Blízko Zvolena by už čoskoro mohla stáť nová fabrika, v ktorej by vyrábali luxusné športové vozy Maserati. Oznámil to minister hospodárstva po stretnutí s výkonným riaditeľom automobilky Emersonom Fitipaldim. „Som nadšený, na Slovensko smeruje piata automobilka,“ povedal minister. Dobrý pocit mal zo stretnutia aj Fitipaldi, ktorý ministrove slová komentoval diplomaticky. „Slovensko sa nám páči, má veľký potenciál,“ povedal Fitipaldi.',
    firstOption: '“Slovensko má na dosah piatu automobilku.”',  
    firstHeadline: '- titulok článku',
    secondOption: '“Pri Zvolene sa začnú vyrábať slávne športiaky Maserati.”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Výkonný riaditeľ z Maserati: Slovensko má veľký potenciál.”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'red', 'green']
  },
  {
    headline: '2. Nová automobilka',
    text: 'Blízko Zvolena by už čoskoro mohla stáť nová fabrika, v ktorej by vyrábali luxusné športové vozy Maserati. Oznámil to minister hospodárstva po stretnutí s výkonným riaditeľom automobilky Emersonom Fitipaldim. „Som nadšený, na Slovensko smeruje piata automobilka,“ povedal minister. Dobrý pocit mal zo stretnutia aj Fitipaldi, ktorý ministrove slová komentoval diplomaticky. „Slovensko sa nám páči, má veľký potenciál,“ povedal Fitipaldi.',
    firstOption: '“a”',
    firstHeadline: '- titulok článku', 
    secondOption: 'b”',
    secondHeadline: '- titulok článku',
    thirdOption: 'c”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'green', 'red']
  },
  {
    headline: '3. Nová automobilka',
    text: 'Blízko Zvolena by už čoskoro mohla stáť nová fabrika, v ktorej by vyrábali luxusné športové vozy Maserati. Oznámil to minister hospodárstva po stretnutí s výkonným riaditeľom automobilky Emersonom Fitipaldim. „Som nadšený, na Slovensko smeruje piata automobilka,“ povedal minister. Dobrý pocit mal zo stretnutia aj Fitipaldi, ktorý ministrove slová komentoval diplomaticky. „Slovensko sa nám páči, má veľký potenciál,“ povedal Fitipaldi.',
    firstOption: '“Slovensko má na dosah piatu automobilku.”',
    firstHeadline: '- titulok článku',
    secondOption: '“Pri Zvolene sa začnú vyrábať slávne športiaky Maserati.”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Výkonný riaditeľ z Maserati: Slovensko má veľký potenciál.”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'red', 'green']
  },
  {
    headline: '4. Nová automobilka',
    text: 'Blízko Zvolena by už čoskoro mohla stáť nová fabrika, v ktorej by vyrábali luxusné športové vozy Maserati. Oznámil to minister hospodárstva po stretnutí s výkonným riaditeľom automobilky Emersonom Fitipaldim. „Som nadšený, na Slovensko smeruje piata automobilka,“ povedal minister. Dobrý pocit mal zo stretnutia aj Fitipaldi, ktorý ministrove slová komentoval diplomaticky. „Slovensko sa nám páči, má veľký potenciál,“ povedal Fitipaldi.',
    firstOption: '“a”',
    firstHeadline: '- titulok článku', 
    secondOption: 'b”',
    secondHeadline: '- titulok článku',
    thirdOption: 'c”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'green', 'red']
  },
  {
    headline: '5. Nová automobilka',
    text: 'Blízko Zvolena by už čoskoro mohla stáť nová fabrika, v ktorej by vyrábali luxusné športové vozy Maserati. Oznámil to minister hospodárstva po stretnutí s výkonným riaditeľom automobilky Emersonom Fitipaldim. „Som nadšený, na Slovensko smeruje piata automobilka,“ povedal minister. Dobrý pocit mal zo stretnutia aj Fitipaldi, ktorý ministrove slová komentoval diplomaticky. „Slovensko sa nám páči, má veľký potenciál,“ povedal Fitipaldi.',
    firstOption: '“Slovensko má na dosah piatu automobilku.”',
    firstHeadline: '- titulok článku',
    secondOption: '“Pri Zvolene sa začnú vyrábať slávne športiaky Maserati.”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Výkonný riaditeľ z Maserati: Slovensko má veľký potenciál.”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'red', 'green']
  },
]

const Learn: NextPage = () => {
  const [index, setIndex] = useState(0)

  const [answers, setAnswers] = useState<("white" | "green" | "red")[]>(["white", "white", "white", "white","white"])

  const correctAnswers: ("green" | "red")[] = ["red", "red", "green"]

  return (
    <div>
      <header className='pb-12 pt-4 px-8 h-4 bg-white'>
        <div className='flex justify-between items-center'>
          <Image src={logo} alt="logo of InfoMentor" />
          <div className='text-red font-bold font-[20px]'>TÝŽDENNÉ VÝZVY</div>
          <Image src={profile} alt="logo of InfoMentor" />
        </div>
      </header>
      <div>
        <Question setAnswers={setAnswers} answers={answers} index={index} setIndex={setIndex} data={data}/>
      </div>
    </div>
  )
}

export default Learn
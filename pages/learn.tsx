import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/images/logoVariant3.svg'
import Button from '../components/Button'
import profile from '../public/images/Profile.svg'
import Sphere from '../components/Sphere'


const Learn: NextPage = () => {
  return (
    <div>
      <header className='py-10 px-8 h-4'>
        <div className='flex justify-between'>
          <Image src={logo} alt="logo of InfoMentor" />
          <Sphere answer="white" />
          <Image src={profile} alt="logo of InfoMentor" />
        </div>
      </header>
    </div>
  )
}

export default Learn
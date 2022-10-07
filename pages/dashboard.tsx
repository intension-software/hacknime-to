import type { NextPage } from 'next'

import logo from '../public/images/logoWhite.png'
import profile from '../public/images/profile.png'
import Image from 'next/image'

const Dashboard: NextPage = () => {
  return (
    <div>
      <header className='py-10 px-8 h-4'><div className='flex justify-between'><Image src={logo} alt="logo of InfoMentor" /><Image src={profile} alt="logo of InfoMentor" /></div></header>
    </div>
  )
}

export default Dashboard
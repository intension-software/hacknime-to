import type { NextPage } from 'next'

import logo from '../public/images/logoWhite.png'
import profile from '../public/images/profile.png'
import Image from 'next/image'
import Button from '../components/Button'

const Dashboard: NextPage = () => {
  return (
    <div>
      <header className='py-10 px-8 h-4'><div className='flex justify-between'><Image src={logo} alt="logo of InfoMentor" /><Image src={profile} alt="logo of InfoMentor" /></div></header>
      <body>
        <div className="bg-[url('../public/images/Learn.png')] bg-no-repeat h-48 w-auto flex content-center mx-8 my-12 pl-4 pb-8 font-extrabold text-black items-end"><h2>Týždenné výzvy</h2><div className="translate-y-12 -translate-x-6"><Button >Poď sa učiť</Button></div></div>
        <div className="bg-[url('../public/images/Season.png')] bg-no-repeat h-48 w-auto flex content-center mx-8 my-12 pl-4 pb-8 font-extrabold text-black items-end"><h2>Týždenné výzvy</h2><div className="translate-y-12 -translate-x-6"><Button >Poď sa učiť</Button></div></div>
        <div className="bg-[url('../public/images/Forum.png')] bg-no-repeat h-48 w-auto flex content-center mx-8 my-12 pl-4 pb-8 font-extrabold text-black items-end"><h2>Týždenné výzvy</h2><div className="translate-y-12 -translate-x-6"><Button >Poď sa učiť</Button></div></div>
        <div className="bg-[url('../public/images/Leaderboard.png')] bg-no-repeat h-48 w-auto flex content-center mx-8 my-12 pl-4 pb-8 font-extrabold text-black items-end"><h2>Týždenné výzvy</h2><div className="translate-y-12 -translate-x-6"><Button >Poď sa učiť</Button></div></div>
      </body>
    </div>
  )
}

export default Dashboard
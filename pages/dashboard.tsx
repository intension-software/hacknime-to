import type { NextPage } from 'next'

import logo from '../public/images/logoWhite.svg'
import learn from '../public/images/Learn.svg'
import season from '../public/images/Season.svg'
import leaderboard from '../public/images/Leaderboard.svg'
import profile from '../public/images/Profile.svg'
import Image from 'next/image'
import Button from '../components/Button'
import forum from '../public/images/Forum.svg'

import Link from 'next/link'
import { useRouter } from 'next/router'


const Dashboard: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <header className='py-10 px-8 h-4'>
        <div className='flex justify-between'>
          <Image src={logo} alt="logo of InfoMentor" />
          <Image src={profile} alt="logo of InfoMentor" onClick={() => {
            router.push('/login')
          }} />
        </div>
      </header>

      <div className="flex flex-wrap gap-10 px-8 py-8">
        <div className="relative">
          <Image src={learn} alt="learn" />
          <div className="absolute bottom-0 left-0 w-full pl-6 pb-10 text-black normal-bold">
            Týždenné výzvy
          </div>
          <div className="absolute bottom-2 right-0 mr-8 translate-y-1/2">
            <Link href="/learn" passHref>
              <Button>Poď sa učiť</Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image src={season} alt="seasons" />
          <div className="absolute bottom-0 left-0 w-full pl-6 pb-10 text-black normal-bold">
            Sezónne aktivity
          </div>
          <div className="absolute bottom-2 right-0 mr-8 translate-y-1/2">
            <Link href="/seasons" passHref>
              <Button>Zúčastni sa</Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image src={leaderboard} alt="leaderboard" />
          <div className="absolute bottom-0 left-0 w-full pl-6 pb-10 text-black normal-bold">
            Rebríček
          </div>
          <div className="absolute bottom-2 right-0 mr-8 translate-y-1/2">
            <Button>Porovnaj sa</Button>
          </div>
        </div>
        <div className="relative">
          <Image src={forum} alt="forum" />
          <div className="absolute bottom-0 left-0 w-full pl-6 pb-10 text-black normal-bold">
            Fórum
          </div>
          <div className="absolute bottom-2 right-0 mr-8 translate-y-1/2">
            <Button>Diskutuj</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
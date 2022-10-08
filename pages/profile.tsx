import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/images/logoVariant4.svg'
import profile from '../public/images/ProfileBig.svg'

import { useRouter } from 'next/router'


const Profile: NextPage = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen">
      <div className='flex justify-between items-center pb-12 pt-4 px-8'>
        <Image src={logo} alt="logo of InfoMentor" onClick={() => {
            router.push('/dashboard')
          }}/>
        <div className='text-red font-bold font-[20px]'>TÝŽDENNÉ VÝZVY</div>
        <div className='h-9 w-9'></div>
      </div>
      <div className='mx-5 flex'>
        <Image src={profile} className="w-42 h-42" alt="logo of InfoMentor" />
        <div className='pl-4 pt-2'>
          <div className='text-white'>Meno</div>
          <div className='text-white normal-bold'>Priezvisko</div>
          <div className='text-white text-opacity-50 text-sm'>email@email.com</div>
        </div>
      </div>
      <div className='bg-white m-4 py-2 px-4 rounded-3xl'>
        <div className='extra-bold text-red'>Štatistiky</div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Celkové skóre</div>
          <div>56 215</div>
        </div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Skepsa</div>
          <div>B+</div>
        </div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Kritika</div>
          <div>A</div>
        </div>
      </div>
      <div className='bg-white m-4 py-2 px-4 rounded-3xl'>
        <div className='extra-bold text-red'>Info o mne</div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Škola</div>
          <div>Stredná odborná škola</div>
        </div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Trieda</div>
          <div>3.B</div>
        </div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Poradie v rámci triedy</div>
          <div>1.</div>
        </div>
      </div>
      <div className='bg-white m-4 py-2 px-4 rounded-3xl'>
        <div className='extra-bold text-red'>História testov</div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Zavádzajúce tituly</div>
          <div>5/5</div>
        </div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Pravda vs. lož</div>
          <div>4/5</div>
        </div>
        <div className='flex justify-between'>
          <div className='semi-bold'>Problém s fotkou</div>
          <div>5/5</div>
        </div>
        <div className='flex justify-center'>
          <div className='extra-bold'>. . .</div>
        </div>
      </div>
      <div className='bg-white m-4 py-2 px-4 rounded-3xl'>
        <div className='extra-bold text-red'>Nastavenia</div>
        <div className='flex justify-start'>
          <div className='semi-bold'>Nastavenia profilu</div>
        </div>
        <div className='flex justify-start'>
          <div className='semi-bold'>Nastavenia aplikácie</div>
        </div>
        <div className='flex justify-start'>
          <div className='text-red semi-bold'>Odhlásiť sa</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
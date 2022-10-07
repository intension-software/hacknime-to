import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Register.module.css'
import logo from '../public/images/logoVariant2.svg'

const Register: NextPage = () => {
  return (
    <div className='justify-center flex h-screen py-48'>
      <div className="bg-primary-white rounded-2xl pb-12 px-12">
        <div className="-translate-y-10 z-2">
        <div className='flex justify-center'><Image src={logo} alt="logo of InfoMentor" /></div>
        <div className='py-2 h-16 w-64 '><input className="w-full h-full bg-black text-gray-500 rounded-full pl-3" placeholder="Meno a priezvisko" /></div>
        <div className='py-2 h-16 w-64 '><input className="w-full h-full bg-black text-gray-500 rounded-full pl-3" placeholder="Email" /></div>
        <div className='py-2 h-16 w-64 '><input className="w-full h-full bg-black text-gray-500 rounded-full pl-3" placeholder="Heslo" /></div>
        <div className='py-2 h-16 w-64 '><input className="w-full h-full bg-black text-gray-500 rounded-full pl-3" placeholder="Zopakujte heslo" /></div>
        <div className='flex'><div><input type="checkbox" className='bg-black rounded-full'/></div><div className='pl-2 text-black'>Súhlasím so <u>spracovaním</u></div></div>
        <u className='text-black pl-5'>osobných údajov</u>
        <div className="justify-center flex"><button className="bg-red-700 p-2 rounded-full border-black border-4 hover:border-opacity-20 hover:border-4 active:border-red-700 active:bg-black">Registrovať sa</button></div>
        </div>
      </div>
    </div>
  )
}

export default Register
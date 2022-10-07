import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Register.module.css'
import logo from '../public/images/logo.svg'

const Register: NextPage = () => {
  return (
    <div>
      <Image src={logo} alt="logo of InfoMentor" />
    </div>
  )
}

export default Register
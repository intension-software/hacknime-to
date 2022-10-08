import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/images/logoVariant2.svg'
import Button from '../components/Button'
import Link from 'next/link'
import { useState } from 'react'
import { trpc } from '../utils/trpc'

const Register: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const [gdpr, setGdpr] = useState(false)

  const mutation = trpc.userCreate.useMutation()

  const handleSubmit = () => {
    mutation.mutate({
      email,
      password,
      name
    })
  }

  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="px-8">
        <div className="bg-white rounded-3xl w-min h-fit flex flex-col px-8">
          <div className="mx-auto -translate-y-1/2">
            <div
              className="border-4 border-black rounded-full"
              style={{
                width: '113px',
                height: '113px'
              }}
            >
              <Image src={logo} alt="logo" objectFit="cover" />
            </div>
          </div>
          <div className="-mt-8 -mb-2 flex flex-col gap-4">
            <input
              className="rounded-full bg-black py-1.5 px-5 text-white"
              placeholder="Meno a priezvisko"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="rounded-full bg-black py-1.5 px-5 text-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="rounded-full bg-black py-1.5 px-5 text-white"
              placeholder="Heslo"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="rounded-full bg-black py-1.5 px-5 text-white"
              placeholder="Zopakujte heslo"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <label
              htmlFor="gdpr"
              className="italic"
            >
              <input
                type="checkbox"
                id="gdpr"
                className="hidden"
                checked={gdpr}
                onChange={(e) => setGdpr(e.target.checked)}
              />
              <span className={`bg-${gdpr ? 'green' : 'black'} rounded-full w-6 h-6 inline-block mr-2`}></span>
              Súhlasím so <span className="underline">spracovaním osobných údajov</span>
            </label>
          </div>
          <div className="justify-center flex translate-y-1/2">
            <Button
              onClick={handleSubmit}
              disabled={password !== password2 || !gdpr}
            >
              Registrovať sa
            </Button>
          </div>
        </div>
        <div className="text-white pt-8">
          Máte účet? <Link href="/login" className="underline">Prihláste sa</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
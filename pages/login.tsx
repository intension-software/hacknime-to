import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/images/logoVariant2.svg'
import Button from '../components/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mutation = trpc.userLogin.useMutation()

  const handleSubmit = () => {
    mutation.mutate({
      email,
      password
    })
  }

  useEffect(() => {
    if (mutation.data && mutation.data.email) {
      router.push('/dashboard')
    }
  }, [router, mutation.data])
  

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
          </div>
          <div className="justify-center flex translate-y-1/2">
            <Button
              onClick={handleSubmit}
              disabled={email === '' || password === ''}
            >
              Prihlásiť sa
            </Button>
          </div>
        </div>
        <div className="text-white pt-8">
          Nemáte účet? <Link href="/register" className="underline">Zaregistrujte sa</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
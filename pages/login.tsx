import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/images/logoVariant2.svg'
import Button from '../components/Button'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div>
        <div className="bg-white rounded-3xl w-min h-fit flex flex-col px-8 mx-8">
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
              className="rounded-full bg-black py-1.5 px-5 text-white w-fit"
              placeholder="Email"
            />
            <input
              className="rounded-full bg-black py-1.5 px-5 text-white w-fit"
              placeholder="Heslo"
              type="password"
            />
          </div>
          <div className="justify-center flex translate-y-1/2"><Button>Prihlásiť sa</Button></div>
        </div>
        <div className="text-white pt-8 mx-8">
          Nemáte účet? <Link href="/register" className="underline">Zaregistrujte sa</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
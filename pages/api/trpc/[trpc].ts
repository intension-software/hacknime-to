import { initTRPC } from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'

export const t = initTRPC.create()

interface User {
  name: string
  email: string
  password: string
}

const users: User[] = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: '123456'
  }
]

export const appRouter = t.router({
  userCreate: t.procedure
    .input(z.object({
      name: z.string(),
      email: z.string(),
      password: z.string()
    }))
    .mutation((req) => {
      const { name, email, password } = req.input
      const user = {
        name,
        email,
        password
      }
      users.push(user)
      return user
    }),
  userLogin: t.procedure
    .input(z.object({
      email: z.string(),
      password: z.string()
    }))
    .query((req) => {
      const { email, password } = req.input
      const user = users.find(user => user.email === email && user.password === password)
      return user
    })
})

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})

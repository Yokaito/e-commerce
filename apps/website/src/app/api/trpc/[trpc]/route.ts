import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/sdk/server/routers/_app'
import { createContext } from '@/sdk/lib/trpc/context'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  })

export { handler as GET, handler as POST }

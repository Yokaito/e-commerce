import { router, publicProcedure } from '@/server/trpc'
import { prisma } from '@/lib/prisma'
import { loggedInProcedure } from '@/server/middlewares'

export const playersRouter = router({
  online: publicProcedure.query(async () => {
    const playersOnline = await prisma.players_online.findMany({
      include: {
        players: {
          select: {
            group_id: true,
          },
        },
      },
      where: {
        players: {
          group_id: {
            lte: 6,
          },
        },
      },
    })

    return {
      online: playersOnline.length,
    }
  }),
  myCharacters: loggedInProcedure.query(async ({ ctx }) => {
    const { session } = ctx

    const characters = await prisma.players.findMany({
      where: {
        account_id: Number(session.user.id),
      },
    })

    return {
      characters,
    }
  }),
})

import * as z from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  NEXT_PUBLIC_VERCEL_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url().optional(),
})

const env = envSchema.safeParse(process.env)

if (!env.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(env.error.format(), null, 4)
  )
  process.exit(1)
}

export default env.data

import { NewstickerSection } from '@/components/sections'
import { getCurrentLocale } from '@/sdk/locales/server'

export default async function Home() {
  const locale = getCurrentLocale()

  return (
    <>
      <NewstickerSection />
      <div>
        <span>Current Locale: {locale}</span>
      </div>
    </>
  )
}

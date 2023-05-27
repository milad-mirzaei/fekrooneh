import Layout from '@/components/Layout'
import AddLevelModal from '@/components/modals/AddLevelModal'
import AudioModal from '@/components/modals/AudioModal'
import SettingsModal from '@/components/modals/SettingsModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
      <AudioModal/>
      <SettingsModal/>
      <AddLevelModal/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

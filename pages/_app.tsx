import Layout from '@/components/Layout'
import AddImageModal from '@/components/modals/AddImageModal'
import AddLevelModal from '@/components/modals/AddLevelModal'
import AudioModal from '@/components/modals/AudioModal'
import PreviewModal from '@/components/modals/PreviewModal'
import SettingsModal from '@/components/modals/SettingsModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
      <AudioModal/>
      <SettingsModal/>
      <AddImageModal/>
      <AddLevelModal/>
      <PreviewModal/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

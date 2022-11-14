import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/Layout'

import type { AppProps } from 'next/app'

// TODO: Consider using next/link alone or in combination with ChakraLink throughout the App.
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <ChakraProvider>
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </ChakraProvider>
)

export default App

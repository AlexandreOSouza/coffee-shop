import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp

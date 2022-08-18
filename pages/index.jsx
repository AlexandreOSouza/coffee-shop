import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../components/nav'
import HeroSection from '../components/sections/hero'
import PopularSection from '../components/sections/popular'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafe Street</title>
      </Head>
      <Flex width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'flex-start'}>
        <Flex maxW={'1900px'} width={'100%'} flexDirection={'column'}>
          <HeroSection />
          <PopularSection />
        </Flex>
      </Flex>
    </>
  )
}

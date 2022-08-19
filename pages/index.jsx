import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../components/nav'
import AboutUsSection from '../components/sections/aboutUs'
import HeroSection from '../components/sections/hero'
import HowToUseSection from '../components/sections/howToUse'
import PopularSection from '../components/sections/popular'
import TestimonialSection from '../components/sections/testimonial'
import SpecialMenuSection from '../components/sections/specialMenu'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafe Street</title>
      </Head>
      <Flex width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'flex-start'}>
        <Flex maxW={'1900px'} width={'100%'} flexDirection={'column'} pb={'100px'}>
          <HeroSection />
          <PopularSection />
          <HowToUseSection />
          <AboutUsSection />
          <SpecialMenuSection />
          <TestimonialSection />
        </Flex>
      </Flex>
    </>
  )
}

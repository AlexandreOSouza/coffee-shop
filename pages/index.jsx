import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import Nav from '../components/nav'
import AboutUsSection from '../components/sections/aboutUs'
import HeroSection from '../components/sections/hero'
import HowToUseSection from '../components/sections/howToUse'
import PopularSection from '../components/sections/popular'
import TestimonialSection from '../components/sections/testimonial'
import SpecialMenuSection from '../components/sections/specialMenu'
import NewsletterSection from '../components/sections/newsletter'

export default function Home() {
  return (
    <>
      <Flex width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'flex-start'}>
      <Head>
        <title>Cafe Street</title>
      </Head>
        <Flex maxW={'1900px'} width={'100%'} flexDirection={'column'} pb={{base: 0, md: '100px'}}>
          <HeroSection />
          <PopularSection />
          <HowToUseSection />
          <AboutUsSection />
          <SpecialMenuSection />
          <TestimonialSection />
          <NewsletterSection />
        </Flex>
      </Flex>
    </>
  )
}

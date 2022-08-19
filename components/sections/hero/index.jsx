import { Flex } from "@chakra-ui/react"
import Nav from "../../nav"
import ContentHero from "./content"

const HeroSection = () => {
    return (
        <Flex 
            width={'100%'} 
            px={{base: '50px', md: '132px'}} 
            pt={'30px'} 
            height={{base: '2200px', md: '1004px'}} 
            alignItems={'flex-start'}
            flexDirection={'column'}
            backgroundImage={'./static/images/landing/bg-image.svg'}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
        >
            <Nav />
            <ContentHero />
        </Flex>
    )
}

export default HeroSection

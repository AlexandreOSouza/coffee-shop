import { Flex } from "@chakra-ui/react"
import Nav from "../../nav"

const HeroSection = () => {
    return (
        <Flex 
            width={'100%'} 
            px={'100px'} 
            pt={'30px'} 
            height={'1004px'} 
            alignItems={'flex-start'}
            backgroundImage={'./static/images/landing/bg-image.png'}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            backgroundRepeat={'no-repeat'}
        >
            <Nav />
        </Flex>
    )
}

export default HeroSection

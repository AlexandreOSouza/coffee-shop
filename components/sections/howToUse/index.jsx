import { Box, Flex } from "@chakra-ui/react"
import TitleText from "../../texts/title"
import HowSteps from "./steps"

const SERVICES = [
    {
        title: 'choose your coffee',
        desc: 'there are 20+ coffees for you',
        image: '/static/images/howToUse/choose.svg'
    },
    {
        title: 'we delivery it to you',
        desc: 'Choose delivery service',
        image: '/static/images/howToUse/food-truck.svg'
    },
    {
        title: 'Enjoy your coffee',
        desc: 'Choose delivery service',
        image: '/static/images/howToUse/coffee-cup.svg'
    }
]

const HowToUseSection = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} id={'delivery'}>
            <Flex
                mt={'120px'}
                px={{base: '60px', md: '135px'}}
                flexDirection={'column'}
                width={'100%'}
                alignItems={{base: 'center', md: ''}}
            >
                <TitleText>
                    How to use delivery service
                </TitleText>
                <Flex columnGap={{base: '0', md: '30px'}} mt={'40px'} flexDir={{base: 'column', md: 'row'}}>
                    {SERVICES.map((service, index) => <HowSteps key={index} {...service} />)}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HowToUseSection

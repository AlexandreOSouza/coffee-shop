import { Box, Flex } from "@chakra-ui/react"
import SubtileText from "../../texts/subtitle"
import TitleText from "../../texts/title"
import TestimonialCard from "./testimonialCard"

const TESTIMONIALS = [
    {
        image: '/static/images/landing/sayAbout/naura.png',
        title: 'Naura',
        desc: 'I really love the cappucino, the coffee was very smooth'
    },
    {
        image: '/static/images/landing/sayAbout/john.png',
        title: 'John',
        desc: 'this coffee shop is very convenient'
    },
    {
        image: '/static/images/landing/sayAbout/azura.png',
        title: 'Azura',
        desc: 'the coffee menu here is very much'
    }
]

const TestimonialSection = () => {
    return (
        <Flex
            backgroundImage={'/static/images/landing/sayAbout/bg.png'}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'left'}
            backgroundSize={'60% 100%'}
            width={'100%'}
            height={'484px'}
            justifyContent={'center'}
            alignItems={'flex-end'}
            columnGap={'170px'}
            mt={'150px'}
        >
            <Flex 
                justifyContent={"space-between"} 
                alignItems={'center'} 
                width={'100%'} 
                height={'100%'}
                pl={'129px'}
                pr={'50px'}
            > 
                <Flex flexDirection={'column'}>
                    <TitleText>
                        What they say about us
                    </TitleText>
                    <Box maxWidth={'352px'} mt={'16px'}>
                        <SubtileText>
                        We always provide the best service and always maintain the quality of coffee
                        </SubtileText>
                    </Box>
                </Flex>
                <Flex columnGap={'40px'}>
                    {TESTIMONIALS.map((testimonials, index) => {
                        return (
                            <TestimonialCard key={index} {...testimonials} />
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TestimonialSection

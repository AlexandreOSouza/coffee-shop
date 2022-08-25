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
            backgroundRepeat={{base: 'repeat', md: 'no-repeat'}}
            backgroundPosition={'left'}
            backgroundSize={{base: '', md: '60% 100%'}}
            width={'100%'}
            height={{base: '100%', md: '484px'}}
            justifyContent={'center'}
            alignItems={'flex-end'}
            columnGap={'170px'}
            mt={{base: '80px', md: '150px'}}
            py={{base: '20px', md: ''}}
        >
            <Flex 
                justifyContent={{ base: 'center', md: "space-between"}} 
                alignItems={'center'} 
                width={'100%'} 
                height={'100%'}
                pl={{base: '0', md: '129px'}}
                pr={{base: '0', md: '50px'}}
                flexDirection={{base: 'column', md: 'row'}}
            > 
                <Flex flexDirection={'column'} alignItems={{base: 'center', md: ''}}>
                    <TitleText>
                        What they say about us
                    </TitleText>
                    <Box maxWidth={'352px'} mt={'16px'}>
                        <SubtileText textAlign={{base: 'center', md: ''}}>
                            We always provide the best service and always maintain the quality of coffee
                        </SubtileText>
                    </Box>
                </Flex>
                <Flex columnGap={{base: 0, md: '40px'}} rowGap={{base: '40px', md: ''}} flexDir={{ base: 'column', md: 'row'}} mt={{base: '50px', md: ''}}>
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

import { Box, Flex } from "@chakra-ui/react"
import TitleText from "../../texts/title"
import PopularCard from "../../card"

const POPULAR_OP = [
    {
        title: 'Vanilla Latte',
        image: '/static/images/landing/popular/vanilla.png',
        hot: true,
        cold: false,
        soldAmount: 21000,
        rating: 4.8
    },
    {
        title: 'Espresso',
        image: '/static/images/landing/popular/espresso.png',
        hot: false,
        cold: false,
        soldAmount: 12000,
        rating: 4.8
    },
    {
        title: 'HazeInut Latte',
        image: '/static/images/landing/popular/hazeinut.png',
        hot: false,
        cold: false,
        soldAmount: 23000,
        rating: 4.8
    }
]

const PopularSection = () => {
    return (
        <Flex justifyContent={'center'}>
            <Flex 
                mx={{base: '', md: '86px'}} 
                flexDirection={'column'} 
                mt={{base: '-1400px', md: '-311px'}} 
                pb={'80px'}
                px={'60px'}
                backgroundImage={{base: '', md: '/static/images/landing/popular/rectangle.png'}}
                backgroundRepeat={'no-repeat'}
                backgroundPosition={'bottom'}
                backgroundSize={'100% 70%'}
                alignItems={{base: 'center', md: ''}}
            >
                <Box ml={{base: '', md: '37px'}}>
                    <TitleText>
                        Popular Now
                    </TitleText>
                </Box>
                <Flex columnGap={'38px'} rowGap={'30px'} justifyContent={'center'} mt={'32px'} flexDir={{base: 'column', md: 'row'}}>
                    {POPULAR_OP.map((item, index) => 
                        <PopularCard key={index} {...item} />
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PopularSection

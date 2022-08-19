import { Flex, Grid, GridItem } from "@chakra-ui/react"
import PopularCard from "../../card"
import TitleText from "../../texts/title"

const SPECIAL = [
    {
        title: 'Sandwich',
        image: '/static/images/menu/sandwich.png',
        desc: 'bread with meat and vegetables',
        soldAmount: 12000,
        rating: 4.8
    },
    {
        title: 'Hot Milk',
        image: '/static/images/menu/hot-milk.png',
        desc: 'Hot Milk with less sugar',
        soldAmount: 11000,
        rating: 8.1
    },
    {
        title: 'Coffe Ice Cream',
        image: '/static/images/menu/coffe-ice-cream.png',
        desc: 'Coffe with ice cream vanilla',
        soldAmount: 16000,
        rating: 4.3
    },
    {
        title: 'Cappucino',
        image: '/static/images/menu/cappucino.png',
        desc: 'Hot Cappucino',
        soldAmount: 23000,
        rating: 6.3
    },
    {
        title: 'Moccacinno',
        image: '/static/images/menu/moccacinno.png',
        desc: 'Hot Moccacino ',
        soldAmount: 13000,
        rating: 2.3
    },
    {
        title: 'Waffle Ice Crem',
        image: '/static/images/menu/waffle.png',
        desc: 'Wafle with Ice cream',
        soldAmount: 15000,
        rating: 4.1
    }
]

const SpecialMenuSection = () => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Flex
                mt={'120px'}
                px={'135px'}
                flexDirection={'column'}
            >
                <TitleText>
                    Special menu for you
                </TitleText>
                <Grid templateColumns={'repeat(3, 1fr)'} columnGap={'40px'} rowGap={'40px'} mt={'40px'}>
                    {SPECIAL.map((item, index) => {
                        return (
                            <GridItem key={index}>
                                <PopularCard {...item} />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Flex>
        </Flex>
    )
}

export default SpecialMenuSection

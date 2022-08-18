import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import OrderButton from "../../buttons/order"
import MainHeroText from "../../texts/hero/main"
import SubtileText from "../../texts/subtitle"

const ContentHero = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={'center'} width={'100%'} pt={'82px'}>
            <Flex flexDirection={"column"} >
                <Flex>
                    <MainHeroText>
                        Enjoy your
                    </MainHeroText>
                    <MainHeroText color={'primary'}>
                        &nbsp;coffee
                    </MainHeroText>
                </Flex>
                <MainHeroText>
                    before your activity
                </MainHeroText>
                <Box maxW={'393px'} marginTop={'24px'}>
                    <SubtileText>
                        Boost your productivity and build your mood with a glass of coffee in the morning 
                    </SubtileText>
                </Box>
                <Box>
                    <OrderButton />
                </Box>
            </Flex>
            <Box>
                <Image src={'/static/images/landing/img-hero.svg'} width={'526px'} height={'426px'} />
            </Box>
            
        </Flex>
    )
}

export default ContentHero

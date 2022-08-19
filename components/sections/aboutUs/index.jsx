import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import GetCoffeeButton from "../../buttons/getCoffee"
import DescText from "../../texts/description"
import SubtileText from "../../texts/subtitle"
import TitleText from "../../texts/title"

const AboutUsSection = () => {
    return (
        <Flex
            backgroundImage={'/static/images/aboutUs/bg-image.png'}
            backgroundRepeat={'no-repeat'}
            backgroundPosition={'bottom'}
            backgroundSize={'100% 80%'}
            width={'100%'}
            height={'572px'}
            justifyContent={'center'}
            alignItems={'flex-end'}
            pb={'62px'}
            columnGap={'170px'}
            mt={{base: '0px', md: '150px'}}
        >
            <Flex
                background={'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)'}
                padding={'6px'}
                borderRadius={'12px'}
                display={{base: 'none', md: 'flex'}}
            >
                <Image src={'/static/images/aboutUs/coffee.png'} width={'359px'} height={'497px'} />
            </Flex>
            <Flex
                flexDirection={'column'}
                mb={'20px'}
                mt={'84px'}
                alignItems={{base: 'center', md: ''}}
            >
                <TitleText>
                    About Us
                </TitleText>
                <Box maxW={'348px'} mt={'24px'}>
                    <DescText textAlign={{base: 'center', md: ''}}>
                        We provide quality coffee, and ready to deliver.
                    </DescText>
                </Box>
                <Flex maxW={'478px'} mt={'24px'} flexDir={'column'} alignItems={{base: 'center', md: ''}}>
                    <SubtileText textAlign={{base: 'center', md: ''}}>
                        We are a company that makes and distributes delicious drinks. our main product is made with a secret recipe and available in stores worldwide.
                    </SubtileText>
                    <GetCoffeeButton mt={'32px'}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AboutUsSection

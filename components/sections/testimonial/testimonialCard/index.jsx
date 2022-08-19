import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import CardDesc from "../../../card/cardDescription"
import DescText from "../../../texts/description"

const TestimonialCard = ({ image, title, desc }) => {
    return (
        <Flex width={'257px'} height={'280px'}>
            <Flex 
                border={'6px solid rgba(255, 211, 145, 1)'}
                backgroundColor={'#FFCB7C'}  
                width={'226px'}
                height={'86px'}  
                position={'absolute'}
                borderRadius={'8px'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                zIndex={1}
                marginLeft={'30px'}
                marginTop={'171px'}
                flexDir={'column'}
                px={'12px'}
                py={'9px'}
            >
                <Text 
                    fontWeight={500}
                    fontSize={'18px'}
                    lineHeight={'27px'}
                    color={'secondary'}
                >
                    {title}
                </Text>
                <CardDesc>
                    {desc}
                </CardDesc>
            </Flex>
            <Box>
                <Image src={image} width={"203px"} height={'280px'} border={'6px solid rgba(255, 211, 145, 0.62)'} />
            </Box>
        </Flex>
    )
}

export default TestimonialCard

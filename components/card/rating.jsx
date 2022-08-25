import { Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

const Rating = ({ rating }) => {
    return (
        <Flex  
            background={'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)'}
            width={'70px'}
            height={'34px'}
            borderRadius={'50px'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex 
                background={'white'}
                borderRadius={'50px'}
                width={'62px'}
                height={'26px'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >
                <Text
                    fontSize={'14px'}
                    lineHeight={'21px'}
                    fontWeight={'700'}
                >
                    {rating}
                </Text>
                <Box>
                    <Image src={'/static/images/icons/star.svg'} width={'14px'} height={'14px'} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Rating

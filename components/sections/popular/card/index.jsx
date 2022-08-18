import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import { abbreviateNumber } from "../../../../utils/textUtils"
import CardTitle from "./cardTitle"
import PopularState from "./popularState"
import Rating from "./rating"

const PopularCard = ({ title, image, hot, cold, soldAmount, rating }) => {
    return (
        <Flex 
            background={'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%)'}
            padding={'6px'}
            borderRadius={'12px'}
        >
            <Flex
                flexDirection={'column'}
                background={'white'}
                pt={'24px'}
                px={'18px'}
                pb={'19px'}
                borderRadius={'12px'}
            >
                <Box>
                    <Box position={'absolute'} zIndex={1} ml={'10px'} mt={'7px'}> 
                        <Rating rating={rating} />
                    </Box>
                    <Image src={image} width={'307px'} height={'226px'} />
                </Box>
                <Flex mt={'19px'} mx={'11px'} justifyContent={"space-between"}>
                    <Flex justifyContent={"space-between"}>
                        <Flex flexDirection={'column'}>
                           <CardTitle>
                                {title}
                            </CardTitle>
                            <Flex mt={'12px'} columnGap={'24px'}>
                                <PopularState active={hot}>
                                    Hot
                                </PopularState>
                                <PopularState active={cold}>
                                    Cold
                                </PopularState>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'} rowGap={'6px'}>
                        <CardTitle>
                            {abbreviateNumber(soldAmount)}
                        </CardTitle>
                        <Box>
                            <Image src={'/static/images/icons/order.svg'} width={'43px'} height={'43px'} />
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default PopularCard

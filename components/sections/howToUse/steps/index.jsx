import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import DescText from "../../../texts/description"
import SubtileText from "../../../texts/subtitle"

const HowSteps = ({ title, desc, image}) => {
    return (
        <Flex 
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'370px'}
            height={'290px'}
        >
            <Box>
                <Image src={image} width={'159px'} height={'159px'} />
            </Box>
            <DescText>
                {title}
            </DescText>
            <SubtileText>
                {desc}
            </SubtileText>
        </Flex>
    )
}

export default HowSteps

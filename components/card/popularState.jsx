import { Box, Button, Text } from "@chakra-ui/react"

const PopularState = ({ active, children }) => {
    const color = active ? '#FF912B' : '#FFD28F'
    return (
        <Box
            background={'white'}
            border={`2px solid ${color}`}
            borderRadius={'8px'}
            width={'64px'}
            height={'32px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Text 
                color={`${color}`}
                fontSize={'16px'}    
                fontWeight={'bold'}
                lineHeight={'24px'}
            >
                {children}
            </Text>
        </Box>
    )
}

export default PopularState

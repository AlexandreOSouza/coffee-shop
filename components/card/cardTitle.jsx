import { Text } from "@chakra-ui/react"

const CardTitle = ({ children }) => {
    return (
        <Text 
            fontSize={'24px'} 
            fontWeight={'600'} 
            lineHeight={'36px'}
            color={'secondary'}
        >
            {children}
        </Text>
    )
}

export default CardTitle

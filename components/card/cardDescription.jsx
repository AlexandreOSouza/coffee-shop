import { Text } from "@chakra-ui/react"

const CardDesc = ({ children }) => {
    return (
        <Text 
            fontSize={'14px'} 
            fontWeight={'600'} 
            lineHeight={'21px'}
            color={'subtitle'}
        >
            {children}
        </Text>
    )
}

export default CardDesc

import { Text } from "@chakra-ui/react"

const TitleText = ({ children }) => {
    return (
        <Text 
            fontSize={'32px'} 
            fontWeight={'600'} 
            lineHeight={'48px'}
            color={'black'}
        >
            {children}
        </Text>
    )
}

export default TitleText

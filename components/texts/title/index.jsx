import { Text } from "@chakra-ui/react"

const TitleText = ({ children, ...props }) => {
    return (
        <Text 
            fontSize={'32px'} 
            fontWeight={'600'} 
            lineHeight={'48px'}
            color={'black'}
            {...props}
        >
            {children}
        </Text>
    )
}

export default TitleText

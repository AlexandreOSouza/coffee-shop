import { Text } from "@chakra-ui/react"

const MainHeroText = ({ children, ...props }) => {
    return (
            <Text 
                fontSize={'48px'} 
                fontWeight={'600'} 
                lineHeight={'72px'}
                {...props}
            >
                {children}
            </Text>
    )
}

export default MainHeroText

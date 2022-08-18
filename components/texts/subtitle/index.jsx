import { Text } from "@chakra-ui/react"

const SubtileText = ({ children }) => {
    return (
        <Text 
            fontSize={'18px'} 
            fontWeight={'400'} 
            lineHeight={'27px'}
            color={'subtitle'}
        >
            {children}
        </Text>
    )
}

export default SubtileText

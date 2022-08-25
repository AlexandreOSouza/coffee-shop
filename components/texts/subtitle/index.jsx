import { Text } from "@chakra-ui/react"

const SubtileText = ({ children, ...props }) => {
    return (
        <Text 
            fontSize={'18px'} 
            fontWeight={'400'} 
            lineHeight={'27px'}
            color={'subtitle'}
            {...props}
        >
            {children}
        </Text>
    )
}

export default SubtileText

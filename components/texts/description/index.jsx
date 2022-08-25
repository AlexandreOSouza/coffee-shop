import { Text } from "@chakra-ui/react"

const DescText = ({ children, ...props }) => {
    return (
        <Text 
            fontSize={'24px'} 
            fontWeight={'600'} 
            lineHeight={'36px'}
            color={'secondary'}
            {...props}
        >
            {children}
        </Text>
    )
}

export default DescText

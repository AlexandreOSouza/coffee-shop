import { Button, Text } from "@chakra-ui/react"

const GetCoffeeButton = ({ ...props}) => {
    return (
        <Button
            width={'142px'}
            height={'38px'}
            borderRadius={'33px'}
            backgroundColor={'secondary'}
            _hover={{
                background: 'secondary',
                filter: 'brightness(0.7)'
            }}
            _active={{
                background: 'secondary',
                filter: 'brightness(0.7)'
            }}
            {...props}
        >
            <Text 
                color={'#F4AE26'} 
                fontSize={'12px'} 
                lineHeight={'18px'} 
                align={'center'} 
                fontWeight={'700'}
            >
                Get your coffee
            </Text>
        </Button>
    )
}

export default GetCoffeeButton

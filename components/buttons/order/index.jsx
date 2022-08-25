import { Button, Text } from "@chakra-ui/react"

const OrderButton = () => {
    return (
        <Button
            width={'170px'}
            height={'56px'}
            borderRadius={'33px'}
            backgroundColor={'secondary'}
            rightIcon={<img src={'/static/images/icons/order.svg'} />}
            _hover={{
                background: 'secondary',
                filter: 'brightness(0.7)'
            }}
            _active={{
                background: 'secondary',
                filter: 'brightness(0.7)'
            }}
        >
            <Text 
                color={'white'} 
                fontSize={'14px'} 
                lineHeight={'21px'} 
                align={'center'} 
                fontWeight={'600'}
            >
                Order now
            </Text>
        </Button>
    )
}

export default OrderButton

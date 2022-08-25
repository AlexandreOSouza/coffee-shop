import { Box, Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import OrderButton from "../../buttons/order"

const NewsletterInput = () => {
    return (
        <Box>
            <InputGroup>
                <Input
                    type={'email'}
                    placeholder='Email address'
                    borderRadius={'42px'}
                    background={'white'}
                    height={'54px'}
                    width={{base: '300px', md: '486px'}}
                />
                <InputRightElement width={'138px'} height={'100%'} pr={'5px'}>
                    <Button
                        width={'138px'}
                        height={'44px'}
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
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}

export default NewsletterInput

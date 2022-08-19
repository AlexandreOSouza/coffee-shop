import { Flex } from "@chakra-ui/react"
import NewsletterInput from "../../input/newsletter"
import TitleText from "../../texts/title"

const NewsletterSection = () => {
    return (
        <Flex width={'100%'} justifyContent={'center'} marginTop={'120px'}>
            <Flex 
                borderRadius={'24px'}
                backgroundImage={'/static/images/newsletter/bg.png'} 
                width={'1170px'}   
                height={'292px'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDir={'column'}
            >
                <TitleText color={'white'} mb={'26px'}>
                    Subscribe to get 50% discount price
                </TitleText>
                <NewsletterInput />
            </Flex>
        </Flex>
    )
}

export default NewsletterSection

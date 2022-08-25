import { Flex } from "@chakra-ui/react"
import NewsletterInput from "../../input/newsletter"
import TitleText from "../../texts/title"

const NewsletterSection = () => {
    return (
        <Flex width={'100%'} justifyContent={'center'} marginTop={{base: '', md: '120px'}}>
            <Flex 
                borderRadius={{base: 0, md: '24px'}}
                backgroundImage={'/static/images/newsletter/bg.png'} 
                width={{base: '100vw', md: '1170px'}}   
                height={'292px'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDir={'column'}
                backgroundPosition={{base: 'top', md: ''}}
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

import { Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import CartButton from "../buttons/cart"
import SearchInput from "../input/search"

const Nav = () => {
    return (
        <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Image src={'/static/images/logo_coffe.svg'} width={'150px'} height={'30px'} />

            <Flex justifyContent={'space-between'} width={'300px'}>
                <a href="#">
                    <Text color={'primary'}>About us</Text>
                </a>
                <a href="#">
                    <Text>Our Products</Text>
                </a>
                <a href="#">
                    <Text>Delivery</Text>
                </a>
            </Flex>
            <Flex justifyContent={'space-between'} width={'300px'}>
                <SearchInput />
                <CartButton />
            </Flex>
        </Flex>
    )
}

export default Nav

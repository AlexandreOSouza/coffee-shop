import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Input, Text } from "@chakra-ui/react"
import Image from "next/image"
import CartButton from "../buttons/cart"
import SearchInput from "../input/search"
import {useRef, useState} from 'react'
import { HamburgerIcon } from "@chakra-ui/icons"

const Nav = () => {
    const btnRef = useRef()
    const [isOpen, setIsOpen] = useState()
    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <>
        <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'} display={{base: 'none', md: 'flex'}}>
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
        <Flex width={'100%'} justifyContent={'flex-end'}>
            <IconButton icon={<HamburgerIcon />} ref={btnRef} colorScheme='teal' onClick={onOpen}/>
        </Flex>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>

                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default Nav

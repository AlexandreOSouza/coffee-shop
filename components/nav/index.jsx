import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Input, Text, Box } from "@chakra-ui/react"
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
            <Flex flex={1} width={'100%'} justifyContent={'space-between'} alignItems={'center'} display={{base: 'none', md: 'flex'}} position={'fixed'} px={'80px'} pt={'30px'} zIndex={1}>
                <Image src={'/static/images/logo_coffe.svg'} width={'150px'} height={'30px'} />

                <Flex justifyContent={'space-evenly'} flex={1}>
                    <a href="#about">
                        <Text color={'primary'}>About us</Text>
                    </a>
                    <a href="#products">
                        <Text>Our Products</Text>
                    </a>
                    <a href="#delivery">
                        <Text>Delivery</Text>
                    </a>
                </Flex>
                <Flex justifyContent={'space-between'} >
                    <SearchInput />
                    <CartButton />
                </Flex>
            </Flex>
            <Box width={'100%'} display={{base: 'flax', md: 'none'}} position={'fixed'} zIndex={1} p={8}>
                <Flex width={'100%'} justifyContent={'flex-end'}>
                    <IconButton icon={<HamburgerIcon />} ref={btnRef} color={'secondary'} background={'transparent'} onClick={onOpen}/>
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
                        <DrawerHeader borderBottomWidth='1px'>
                            <Image src={'/static/images/logo_coffe.svg'} width={'150px'} height={'30px'} />
                        </DrawerHeader>

                        <DrawerBody pt={10}>
                            <Flex justifyContent={'space-between'} width={'100%'} rowGap={10} flexDir={'column'}>
                                <a href="#about">
                                    <Text color={'primary'}>About us</Text>
                                </a>
                                <a href="#products">
                                    <Text>Our Products</Text>
                                </a>
                                <a href="#delivery">
                                    <Text>Delivery</Text>
                                </a>
                                <CartButton />
                            </Flex>
                        </DrawerBody>                        
                    </DrawerContent>
                </Drawer>
            </Box>
        </>
    )
}

export default Nav

import { Button } from "@chakra-ui/react"
import Image from "next/image"

const CartButton = ({ onClick }) => {
    return (
        <Button 
            onClick={onClick} 
            background={'transparent'} 
            _hover={{ bg: 'trasparent' }}
            _active={{ bg: 'transparent' }}
        >
            <Image src={'/static/images/icons/icons_cart.png'} width={'32px'} height={'32px'} />
        </Button>
    )
}

export default CartButton
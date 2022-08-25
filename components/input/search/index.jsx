import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

const SearchInput = () => {
    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<SearchIcon color='#1D1D1D' />} />
                <Input 
                    placeholder='Cappuccino' 
                    variant='unstyled' 
                    width={'222px'} 
                    height={'40px'} 
                    background={'white'}
                    borderRadius={'35px'}   
                    boxShadow={'0px 4px 4px 0px #00000040'} 
                />
            </InputGroup>
        </>
    )
}

export default SearchInput

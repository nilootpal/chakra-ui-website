import React, { useState } from 'react'
import { 
    Box,
    Stack,
    Button,
    Heading
} from '@chakra-ui/react'

function Header() {
    const [filter, setFilter] = useState('30d');
    return (
        <Box 
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            h='60px'
        >
            <Heading as='h4' size='md'>
                Summer referral competition
            </Heading>
            <Stack 
                direction='row' 
                spacing={2} 
                padding={2}
                bg='#fff'
                align='center'
                borderRadius='8px'
                boxShadow='2px 2px 5px #aaaaaa'
            >
                <Button 
                    bg={filter !== '1h' ? 'blackAlpha.100': 'blackAlpha.400'} 
                    variant='solid'
                    onClick={() => setFilter('1h')}
                >
                    1h
                </Button>
                <Button
                    bg={filter !== '24h' ? 'blackAlpha.100': 'blackAlpha.400'} 
                    variant='solid'
                    onClick={() => setFilter('24h')}
                >
                    24h
                </Button>
                <Button
                    bg={filter !== '30d' ? 'blackAlpha.100': 'blackAlpha.400'} 
                    variant='solid'
                    onClick={() => setFilter('30d')}
                >
                    30d
                </Button>
                <Button
                    bg={filter !== '60d' ? 'blackAlpha.100': 'blackAlpha.400'} 
                    variant='solid'
                    onClick={() => setFilter('60d')}
                >
                    60d
                </Button>
            </Stack>
        </Box>
    )
}

export default Header

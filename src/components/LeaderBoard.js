import { 
    Box,
    Heading,
    Text,
    Button
} from '@chakra-ui/react'
import React from 'react'
import { UserData } from './Data'

function LeaderBoard() {
    return (
        <Box
            width='%'
            bg='#fff'
            mt='20px'
            p='36px'
            borderRadius='8px'
            boxShadow='2px 2px 5px #aaaaaa'
            w='40vw'
        >
            <Heading as='h5' size='sm'>
                User LeaderBoard
            </Heading>

            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                mt={6}
                mb={6}
            >   
                <Text fontSize='xs' width='50%'>
                    Email
                </Text>
                <Text fontSize='xs' width='30%'>
                    Friends Invited
                </Text>
                <Text fontSize='xs' width='20%'>
                    Country
                </Text>
            </Box>
            {
                UserData.map(({email, friends, country}, id) => (
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        mt={3}
                        key={id}
                    >   
                        <Text fontSize='xs' width='50%'>
                            {email}
                        </Text>
                        <Text fontSize='xs' width='30%'>
                            {friends}
                        </Text>
                        <Text fontSize='xs' width='20%'>
                            {country}
                        </Text>
                    </Box>
                ))
            }
            <Button 
                variant='solid'
                size='sm'
                mt={6}
            >
                See LeaderBoard
            </Button>
        </Box>
    )
}

export default LeaderBoard


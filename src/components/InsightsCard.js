import React from 'react'
import {
    Box, 
    Heading, 
    Icon, 
    Stack,
    Text
} from '@chakra-ui/react'
import { Summaries } from './Data'

function InsightsCard() {
    return (
        <Box
            bg='#fff'
            mt='32px'
            p='32px'
            borderRadius='8px'
            boxShadow='2px 2px 5px #aaaaaa'
        >   
            <Stack direction='column' mb={8}>
                <Heading as='h3' size='lg'>
                    ZooTools insights
                </Heading>
                <Text fontSize='lg'>
                    Making analytics simple and actionable
                </Text>
            </Stack>
            <Box 
                display='flex'
            >
                <Box w='50%' p='8px 0'>
                    <Heading as='h5' size='sm'>
                        Summary
                    </Heading>
                    <Stack direction='column' p='16px 0' spacing={3}>
                        {
                            Summaries.map(({icon, color, bold, text}, idx) => (
                                <Stack direction='row' key={idx}>
                                    <Icon as={icon} bg={color} boxSize={6} size='8px'/>
                                    <Heading as='h6' size='xs'>{bold}</Heading>
                                    <Text fontSize='xs'>{text}</Text>
                                </Stack>
                            ))
                        }
                    </Stack>
                </Box>
                <Box w='50%' p='8px 0'>
                    <Heading as='h5' size='sm'>
                        Recommendation
                    </Heading>
                    <Stack direction='column' p='16px 0' spacing={6}>
                        <Heading as='h6' size='xs'>
                            Make sure to promote and share your form.
                        </Heading>
                        <Heading as='h6' size='xs'>
                            Congrats! This is huge. Keep giving rewards for your users.
                        </Heading>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

// <Box>
//     <Stack 
//         direction='row' 
//         alignItems='center'
//         spacing={2}
//     >
//         <Heading as='h3' size='lg'>
//             100,000
//         </Heading>
//         <Icon as={FiUsers} boxSize={6}/>
//     </Stack>

    
// </Box> 

export default InsightsCard

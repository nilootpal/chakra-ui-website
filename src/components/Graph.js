import React, { useState } from 'react'
import {
    Box, 
    Heading, 
    Icon, 
    Stack,
    Text,
    Tooltip,
} from '@chakra-ui/react'
import { FiUsers } from 'react-icons/fi'
import { generateExponentialSignUps } from './Data'

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Graph() {
    const startDate = new Date('2023-07-20');
    const endDate = new Date('2023-08-20');
    const maxSignUps = 3000;

    const [data, setData] = useState(generateExponentialSignUps(startDate, endDate, maxSignUps));

    return (
        <Box
            bg='#fff'
            mt='20px'
            p='32px'
            borderRadius='8px'
            boxShadow='2px 2px 5px #aaaaaa'
        >   
            <Stack direction='column' spacing={1}> 
                <Stack 
                    direction='row' 
                    alignItems='center'
                    spacing={2}
                >
                    <Heading as='h3' size='lg'>
                        100,000
                    </Heading>
                    <Icon as={FiUsers} boxSize={6}/>
                </Stack>
                <Text fontSize='lg'>
                    Participants
                </Text>
            </Stack> 
            <Box
                display='flex'
                alignItems='flex-end'
                justifyContent='space-around'
            >
                {
                    data.map(({date, numberOfSignUps}, id) => {
                        let month = months[date.getMonth()]
                        let day = date.getDate()
                        return(
                            <Tooltip
                                label={`${numberOfSignUps} signups\n${month} ${day}`}
                                key={id}
                                placement='top'
                                sx={{
                                    background: '#fff',
                                    color: '#000',
                                    whiteSpace: 'normal',
                                    maxWidth: '140px',
                                    padding: '16px',
                                    textAlign: 'center'
                                }}
                            >
                                <Box 
                                    key={id}
                                    height={`calc(${numberOfSignUps/10}px)`}
                                    bg='#fc9862'
                                    width='16px'
                                    borderRadius='12px'
                                />
                            </Tooltip>
                        )
                    })
                }
            </Box>
        </Box>
    )
}



export default Graph

import { 
    Box,
    Heading,
    Stack,
    Button,
    Text
} from '@chakra-ui/react'
import React from 'react'

function StatCard({title, data}) {
    const {select, values, button, total} = data;

    return (
        <Box
            width='%'
            bg='#fff'
            mt='20px'
            p='24px 32px'
            borderRadius='8px'
            boxShadow='2px 2px 5px #aaaaaa'
            w='40vw'
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Heading as='h5' size='sm'>
                    {title}
                </Heading>
                <Stack 
                    direction='row' 
                    spacing={2} 
                    padding={2}
                    align='center'
                >
                    <Button 
                        variant='solid'
                        size='xs'
                        bg='blackAlpha.300'
                    >
                        {select[0]}
                    </Button>
                    <Button 
                        variant='ghost'
                        size='xs'
                    >
                        {select[1]}
                    </Button>
                </Stack>
            </Box>
            <Stack direction='column' spacing={3} mt={2} mb={2}>
                {
                    Object.entries(values).map((elem, id) => (
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            position='relative'
                            p='0 18px 0 0'
                            key={id}
                        >   
                            <Text 
                                fontSize='sm' 
                                bg='transparent'
                                zIndex={1}
                            >
                                {elem[0]}
                            </Text>
                            <Box 
                                height='28px'
                                width={`calc(${elem[1]/total*100}%)`}
                                position='absolute'
                                bg='#fc9862'
                                zIndex={0}
                            />
                            <Text 
                                fontSize='sm'
                                zIndex={1}
                                bg='transparent'
                            >
                                {elem[1]}
                            </Text>
                        </Box>
                    ))
                }
            </Stack>
            <Button 
                variant='solid'
                size='sm'
            >
                {button}
            </Button>
        </Box>
    )
}

export default StatCard

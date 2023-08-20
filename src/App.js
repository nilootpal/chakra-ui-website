import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Stack
} from '@chakra-ui/react';
import Header from './components/Header';
import InsightsCard from './components/InsightsCard';
import StatCard from './components/StatCard';
import { Data } from './components/Data';
import LeaderBoard from './components/LeaderBoard';
import Graph from './components/Graph';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box 
        fontSize="xl"
        p='18px 8vw' 
        bg='blackAlpha.100'
      >
          <Header />
          <Graph />
          <InsightsCard />
          <Stack 
            p='16px 0'
            direction='row'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <LeaderBoard />
            <StatCard title='Traffic' data={Data['traffic']} />
          </Stack>
          <Stack 
            p='8px 0'
            direction='row'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <StatCard title='Signup Location' data={Data['signUpLocation']} />
            <StatCard title='Behaviour' data={Data['behaviour']} />
          </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;

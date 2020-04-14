import React from 'react';

import Form from './components/form/index.jsx';
import Schedule from './components/schedule/index.jsx';
import { Box } from './styles';

import './App.css';

export default function App() {
  return (
    <Box container direction={ 'row' } className={ 'App' } spacing={ 2 }>
        <Box item container xs={12} lg={6}>
            <Form />
        </Box>

        
        <Box item container xs={12} lg={6}>
            Hello, Dinna!

            <Schedule />
        </Box>
    </Box>
  );
}
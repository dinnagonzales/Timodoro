import React from 'react';
import { Box } from '../../styles';
const slots = JSON.parse(localStorage.getItem('slots')) || [];

export default function Schedule() {
    console.log( { slots });

    return (
        <Box container>
            { !!slots ? slots.map( (slot, i) => {
                return(
                    <Box key={ `${i}-${slot.timerLength}` } item xs={12}>
                        { slot.name } ({ slot.timerLength } minutes)
                        <br/ >
                        Break { slot.breakLength ? slot.breakLength : '' }
                    </Box>
                )
            }) : null }
        </Box>
    );
}
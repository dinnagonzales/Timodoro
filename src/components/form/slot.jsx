import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/button';

import { Box } from '../../styles';

export default function Slot({ index, data, disabled, handleSave, handleCancel }) {
    const [ slot, updateSlot ] = useState(data);

    const handleInputChange = (event) => {
        event.persist();
        updateSlot(slot => ({...slot, [event.target.name]: event.target.value}));
    };

    return (
        <Box item>
            <TextField 
                name={ 'name' }
                label={ 'Name' }
                type={ 'text' }
                variant={ 'outlined' }
                onChange={ (e) => { handleInputChange(e)}}
                value={ slot.name } />
            <TextField 
                name={ 'timerLength' }
                label={ 'Timer' }
                type={ 'number' }
                variant={ 'outlined' }
                onChange={ (e) => { handleInputChange(e)}}
                value={ slot.timerLength } />
            <TextField 
                name={ 'breakLength' }
                label={ 'Break' }
                type={ 'number' }
                variant={ 'outlined' }
                onChange={ (e) => { handleInputChange(e)}}
                value={ slot.break } />

            <Button type={ 'button' }
                disabled={ disabled }
                onClick={ (e) => {
                    updateSlot(data);
                    handleSave(e, index, slot);
                } }>
                    Save
            </Button>

            { handleCancel ?
                <Button disabled={ disabled } type={ 'button' } onClick={ (e) => handleCancel() }>Cancel</Button>
                : '' }
        </Box>
    );
}
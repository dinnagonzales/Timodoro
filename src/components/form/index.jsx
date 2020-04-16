import React, { useState } from 'react';
import _ from 'lodash';

import Button from '@material-ui/core/button';
import Slot from './slot.jsx';
import { FormController } from './controller';

import { Box } from '../../styles';

const defaultValues = {
    name: '',
    timerLength: 20,
    breakLength: 5,
};

export default function Form() {
    const { slots, nextSlot, handleSubmit, handleSave, handleDelete } = FormController();
    const [ editIndex, setEditIndex ] = useState("");
    const editMode = editIndex !== "";

    return (
        <form noValidate autoComplete="off" onSubmit={ (e) => handleSubmit(e) }>
            <Box container>

                { !!slots ? slots.map( (slot, i) => {
                    const { name, timerLength, breakLength } = slot;
                    const disabledEdit = editIndex !== "" && i !== editIndex;
                    if(i === editIndex){
                        return(
                            <Slot key={ `${i}-${name}-${timerLength}` }
                                index={ editIndex }    
                                data={ slots[i] }
                                handleCancel={ () => setEditIndex("") }
                                handleSave={ (e, index, slot) => {
                                    setEditIndex("");
                                    handleSave(e, index, slot); 
                                }} />
                        );
                    }else{
                        return(
                            <Box key={ `${i}-${name}-${timerLength}` } item xs={12}>
                                { slot.name } ({ timerLength } minutes)
                                <br/ >
                                Break { breakLength ? breakLength : '' }

                                <Button disabled={ disabledEdit } type={ 'button' } onClick={ () => { setEditIndex(i) }} >
                                    Edit
                                </Button>
                                <Button disabled={ disabledEdit } type={ 'button' } onClick={ () => { handleDelete(i) }} >
                                    Delete
                                </Button>
                            </Box>
                        )
                    }
                }) : null }
                
                <Box item xs={12} lg={12}>
                    <h2>New Slot</h2>
                    <Slot data={ defaultValues } index={ nextSlot } handleSave={ handleSave } disabled={ editMode } />
                </Box>
                <Box container>
                    <Button type={ 'submit' } disabled={ editMode }>Save & Close</Button>
                </Box>
            </Box>
        </form>
    );
}
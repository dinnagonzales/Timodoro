import React, { useState } from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/button';


export default function Form() {
    const [ slots, updateSlots ] = useState(JSON.parse(localStorage.getItem('slots')) || []);
    console.log( { slots });
    const save = (e) => {
        const {
            name,
            HH,
            MM,
            SS
        } = e.target;
        const slotsCopy = _.cloneDeep(slots);
        slotsCopy.push({
            name: name.value,
            HH: HH.value,
            MM: MM.value,
            SS: SS.value,
        });

        localStorage.setItem('slots', JSON.stringify(slotsCopy));
    };
    return (
        <form noValidate autoComplete="off" onSubmit={ (e) => save(e) }>
            <TextField 
                name={ 'name' }
                label={ 'Name' }
                type={ 'text' }
                variant={ 'outlined' } />
            <TextField 
                name={ 'HH' }
                label={ 'HH' }
                type={ 'number' }
                variant={ 'outlined' } />
            <TextField 
                name={ 'MM' }
                label={ 'MM' }
                type={ 'number' }
                variant={ 'outlined' } />
            <TextField 
                name={ 'SS' }
                label={ 'SS' }
                type={ 'number' }
                variant={ 'outlined' } />

            { !!slots ? slots.map( slot => {
                return(
                    <div>
                        { slot.name }
                        { slot.HH }:{ slot.MM }:{ slot.SS }
                    </div>
                )
            }) : null }
           
            <Button type={ 'submit' } >Save</Button>
        </form>
    );
}
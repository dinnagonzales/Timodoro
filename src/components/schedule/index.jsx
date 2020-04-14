import React from 'react';

const slots = JSON.parse(localStorage.getItem('slots')) || [];

export default function Schedule() {
    console.log( { slots });

    return (
        <div>
            { !!slots ? slots.map( slot => {
                return(
                    <div>
                        { slot.name }
                        { slot.HH }:{ slot.MM }:{ slot.SS }
                    </div>
                )
            }) : null }
        </div>
    );
}
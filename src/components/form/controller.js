import React, { useState, useEffect } from 'react';

export const FormController = () => {
    const defaultValues = JSON.parse(localStorage.getItem('slots')) || [];
    const [slots, setSlots] = useState(defaultValues);
    const [nextSlot, setNextSlot] = useState(defaultValues.length);

    useEffect(() => {
       setNextSlot(slots.length);
    }, [ slots ]);

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('slots', JSON.stringify(slots));
    };

    const handleDelete = (index) => {
        setSlots(slots => {
            let newSlots = [...slots];
            newSlots.splice(index, 1);
            return newSlots;
        });
    };

    const handleSave = (event, index, slot) => {
        setSlots(slots => {
            let newSlots = [...slots];
            newSlots[index] = slot;

            return newSlots;
        });
    };

    return {
        handleSubmit,
        handleSave,
        handleDelete,
        slots,
        nextSlot
    };
};

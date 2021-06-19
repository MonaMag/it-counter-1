import React from 'react';
import './App.css';

type IncreaseButtonType = {
    value: number
    incHandler: () => void
}

function IncreaseButton(props: IncreaseButtonType) {
    return (
        <button
            className='inc'
            disabled={props.value === 5}
            onClick={props.incHandler}>inc</button>
    )
}

export default IncreaseButton;
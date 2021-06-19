import React from 'react';
import './App.css';

type ResetType = {
    value: number
    resetHandler: () => void
}

function ResetButton(props: ResetType) {
    return (
        <button
            className='reset'
            disabled={props.value === 0}
            onClick={props.resetHandler}>reset</button>
    )
}

export default ResetButton;
import React from 'react';
import '../App.css';
import s from './Display.module.css'

type DisplayType = {
    counterValue: number
    startValue: number
    maxValue: number
    settingsUpdating: boolean
}


function Display(props: DisplayType) {

    return (
        <div className={`${s.scoreboard} ${s.value} ${props.counterValue === props.maxValue ? 'maxWarning' : ''}`}>
            {
                props.startValue >= props.maxValue || props.startValue < 0
                    ?
                    <div className={!props.settingsUpdating ? `${s.error}`: ''}>
                        {!props.settingsUpdating ? 'incorrect value!' : props.counterValue}
                    </div>
                    :
                    <div className={!props.settingsUpdating ? `${s.settingsMessage }` : ''}>
                        {!props.settingsUpdating ? `enter values and press "set"` : props.counterValue}
                    </div>
            }
        </div>
    )
}

export default Display;


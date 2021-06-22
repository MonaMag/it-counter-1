import React from 'react';
import '../App.css';
import s from './SettingsScreen.module.css'
import SettingsInput from "./SettingsInput";


type SettingsScreenType = {
    maxValue: number
    startValue: number
    ChangeMaxValue: (newMaxValue: number) => void
    ChangeStartValue: (newStartValue: number) => void
}


function SettingsScreen(props: SettingsScreenType) {

    return (
        <div className={s.setScreen }>
            <SettingsInput
                           maxValue={props.maxValue}
                           startValue={props.startValue}
                           inputName={'max value:'}
                           changeInputValue={props.ChangeMaxValue}
            />
            <SettingsInput
                           maxValue={props.maxValue}
                           startValue={props.startValue}
                           inputName={'start value:'}
                           changeInputValue={props.ChangeStartValue}
            />
        </div>
    )
}


export default SettingsScreen;


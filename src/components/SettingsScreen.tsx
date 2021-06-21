import React from 'react';
import '../App.css';
import s from './SettingsScreen.module.css'
import SettingsInput from "./SettingsInput";


type SettingsScreenType = {
    value: number
    maxValue: number
    startValue: number
}


function SettingsScreen(props: SettingsScreenType) {
    return (
        <div className={s.setScreen }>
            <SettingsInput value={props.value}
                           maxValue={props.maxValue}
                           startValue={props.startValue}
                           inputName={'max value:'}
            />
            <SettingsInput value={props.value}
                           maxValue={props.maxValue}
                           startValue={props.startValue}
                           inputName={'start value:'}/>
        </div>
    )
}


export default SettingsScreen;


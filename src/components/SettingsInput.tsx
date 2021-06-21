import React from 'react';
import '../App.css';
import s from './SettingsInput.module.css'

type SettingsPropsType = {
    value: number
    maxValue: number
    startValue: number
    inputName: string

}

function SettingsInput(props: SettingsPropsType) {

    return (
            <div className={s.inputWrapper}>
                <div><span>{props.inputName}</span></div>
                <input className={s.input} type="number"/>
            </div>
    )
}


export default SettingsInput;
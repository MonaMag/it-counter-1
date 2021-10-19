import React, {ChangeEvent} from 'react';
import '../App.css';
import s from './SettingsInput.module.css'

type SettingsPropsType = {
    startValue: number
    maxValue: number
    value: number
    inputName: string
    changeInputValue: (value: number) => void

}


function SettingsInput(props: SettingsPropsType) {

    const error = props.startValue >= props.maxValue || props.startValue < 0;

    const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(+e.currentTarget.value);
    }
    return (
        <div className={s.inputWrapper}>
            <div><span>{props.inputName}</span></div>
            <input className={error ? s.error : s.input}
                   type="number"
                   onChange={getInputValue}
                   value={props.value}
            />
        </div>
    )
}


export default SettingsInput;
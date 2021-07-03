import React, {ChangeEvent} from 'react';
import '../App.css';
import s from './SettingsInput.module.css'

type SettingsPropsType = {
    error: string
    value: number
    inputName: string
    changeInputValue: (value: number) => void

}


function SettingsInput(props: SettingsPropsType) {

    /*const error = props.startValue >= props.maxValue || props.startValue < 0;*/

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(+e.currentTarget.value);
    }
    return (
        <div className={s.inputWrapper}>
            <div><span>{props.inputName}</span></div>
            <input className={props.error ? s.error : s.input}
                   type="number"
                   onChange={onChangeValue}
                   value={props.value}

            />
        </div>
    )
}


export default SettingsInput;
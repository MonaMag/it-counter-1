import React, {ChangeEvent} from 'react';
import '../App.css';
import s from './SettingsInput.module.css'

type SettingsPropsType = {
    maxValue: number
    startValue: number
    inputName: string
    changeInputValue: (value: number) => void

}


function SettingsInput(props: SettingsPropsType) {


    const error = props.startValue >= props.maxValue || props.startValue < 0;

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(+e.currentTarget.value);
    }

    return (
        <div className={s.inputWrapper}>
            <div><span>{props.inputName}</span></div>
            <input className={error ? s.error : s.input}
                   type="number"
                   onChange={onChangeMaxValue}
            />
        </div>
    )
}


export default SettingsInput;
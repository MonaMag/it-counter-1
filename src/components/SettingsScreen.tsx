import React, {ChangeEvent} from 'react';
import '../App.css';
import s from './SettingsScreen.module.css'
import SettingsInput from "./SettingsInput";


type SettingsScreenType = {
    maxValue: number
    startValue: number
    onChangeMaxValue: (newMaxValue: number) => void
    onChangeStartValue: (newStartValue: number) => void
    //error: string
}


function SettingsScreen(props: SettingsScreenType) {

    return (
        <div className={s.setScreen}>
            <SettingsInput
                startValue={props.startValue}
                maxValue={props.maxValue}
                value={props.maxValue}
                inputName={'max value:'}
                changeInputValue={props.onChangeMaxValue}
                //error={props.error}
            />
            <SettingsInput
                startValue={props.startValue}
                maxValue={props.maxValue}
                value={props.startValue}
                inputName={'start value:'}
                changeInputValue={props.onChangeStartValue}
                //error={props.error}
            />
        </div>
    )
}


export default SettingsScreen;


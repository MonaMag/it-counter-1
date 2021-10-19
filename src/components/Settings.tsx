import React from 'react';
import '../App.css';
import MyButton from "./MyButton";
import s from './Counter.module.css'
import SettingsScreen from "./SettingsScreen";

type SettingsPropsType = {
    startValue: number
    maxValue: number
    settingsActive: boolean
    //error: string
    //validValues: boolean
    onChangeMaxValue: (newMaxValue: number) => void
    onChangeStartValue: (newStartValue: number) => void
    onSetButtonClick: () => void
}

function Settings(props: SettingsPropsType) {

    //let disabledSet = !!props.error || !props.validValues
    /*|| props.startValue >= props.maxValue || props.startValue < 0;*/
    let disabledSet: boolean = !props.settingsActive || props.startValue >= props.maxValue || props.startValue < 0

    return (
        <div className={s.counter}>
            <SettingsScreen maxValue={props.maxValue}
                            startValue={props.startValue}
                            onChangeMaxValue={props.onChangeMaxValue}
                            onChangeStartValue={props.onChangeStartValue}
                            //error={props.error}
            />
            <div className={s.btnWrapper}>
                <MyButton title={'set'}
                          disabledBtn={disabledSet}
                          changeValue={props.onSetButtonClick}
                />
            </div>
        </div>
    )
}


export default Settings;
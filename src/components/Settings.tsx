import React from 'react';
import '../App.css';
import MyButton from "./MyButton";
import s from './Counter.module.css'
import SettingsScreen from "./SettingsScreen";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    error: string
    validValue: boolean
    ChangeMaxValue: (newMaxValue: number) => void
    ChangeStartValue: (newStartValue: number) => void
    onClickSetButton: () => void
}

function Settings(props: SettingsPropsType) {


    let disabledSet = !!props.error || !props.validValue
    /*|| props.startValue >= props.maxValue || props.startValue < 0;*/

    return (
        <div className={s.counter}>
            <SettingsScreen maxValue={props.maxValue}
                            startValue={props.startValue}
                            error={props.error}
                            ChangeMaxValue={props.ChangeMaxValue}
                            ChangeStartValue={props.ChangeStartValue}
            />
            <div className={s.btnWrapper}>
                <MyButton title='set'
                          disabledBtn={disabledSet}
                          changeValue={props.onClickSetButton}


                />
            </div>
        </div>
    )
}


export default Settings;
import React from 'react';
import '../App.css';
import MyButton from "./MyButton";
import s from './Counter.module.css'
import SettingsScreen from "./SettingsScreen";

type SettingsPropsType = {
    startValue: number
    maxValue: number
    settingsActive: boolean
    onChangeMaxValue: (newMaxValue: number) => void
    onChangeStartValue: (newStartValue: number) => void
    onSetButtonClick: () => void
}

function Settings(props: SettingsPropsType) {

    let disabledSet: boolean = !props.settingsActive || props.startValue >= props.maxValue || props.startValue < 0

    return (
        <div className={s.counter}>
            <SettingsScreen maxValue={props.maxValue}
                            startValue={props.startValue}
                            onChangeMaxValue={props.onChangeMaxValue}
                            onChangeStartValue={props.onChangeStartValue}
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


export  const MemoSettings = React.memo(Settings);
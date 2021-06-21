import React from 'react';
import '../App.css';
import MyButton from "./MyButton";
import s from './Counter.module.css'
import SettingsScreen from "./SettingsScreen";

type SettingsPropsType = {
    value: number
    maxValue: number
    startValue: number

}

function Settings(props: SettingsPropsType) {


    let disabledSet = props.value === props.maxValue


    return (
        <div className={s.counter}>
            <SettingsScreen value={props.value}
                            maxValue={props.maxValue}
                            startValue={props.startValue}
            />
            <div className={s.btnWrapper}>
                <MyButton value={props.value}
                          title='set'
                          maxValue={props.maxValue}
                          disabledBtn={disabledSet}

                />
            </div>
        </div>
    )
}


export default Settings;
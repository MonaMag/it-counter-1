import React from 'react';
import '../App.css';
import Scoreboard from "./Scoreboard";
import MyButton from "./MyButton";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    maxValue: number
    startValue: number
    settingValidValue: boolean
    incHandler: () => void
    resetHandler: () => void
}


function Counter(props: CounterPropsType) {


    let disabledBtn =  !props.settingValidValue || props.value === props.maxValue
   /* let disabledReset = props.settingValidValue || props.value === props.startValue;*/

    return (
        <div className={s.counter}>
            <Scoreboard value={props.value}
                        maxValue={props.maxValue}
                        startValue={props.startValue}
                        settingValidValue={props.settingValidValue}/>


            <div className={s.btnWrapper}>
                <MyButton title='inc'
                          changeValue={props.incHandler}
                          disabledBtn={disabledBtn}
                />
                <MyButton title='reset'
                          changeValue={props.resetHandler}
                          disabledBtn={props.settingValidValue}
                />
            </div>
        </div>
    )
}


export default Counter;
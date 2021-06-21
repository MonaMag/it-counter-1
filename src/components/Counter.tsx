import React from 'react';
import '../App.css';
import Scoreboard from "./Scoreboard";
import MyButton from "./MyButton";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    maxValue: number
    startValue: number
    incHandler: () => void
    resetHandler: () => void
}


function Counter(props: CounterPropsType) {


    let disabledInc = props.value === props.maxValue
    let disabledReset = props.value === props.startValue;

    return (
        <div className={s.counter}>
            <Scoreboard value={props.value} maxValue={props.maxValue}/>
            <div className={s.btnWrapper}>
                <MyButton value={props.value}
                          title='inc'
                          maxValue={props.maxValue}
                          changeCounterValue={props.incHandler}
                          disabledBtn={disabledInc}
                />
                <MyButton value={props.value}
                          title='reset'
                          maxValue={props.maxValue}
                          changeCounterValue={props.resetHandler}
                          disabledBtn={disabledReset}
                />
            </div>
        </div>
    )
}


export default Counter;
import React from 'react';
import '../App.css';
import Display from "./Display";
import MyButton from "./MyButton";
import s from './Counter.module.css'

type CounterPropsType = {
    counterValue: number
    maxValue: number
    startValue: number
    settingsActive: boolean
    incHandler: () => void
    resetHandler: () => void
}


function Counter(props: CounterPropsType) {

    let disabledBtn = props.settingsActive || props.counterValue === props.maxValue
    return (
        <div className={s.counter}>
            <Display counterValue={props.counterValue}
                     startValue={props.startValue}
                     maxValue={props.maxValue}
                     settingsUpdating={!props.settingsActive}
            />


            <div className={s.btnWrapper}>
                <MyButton title='inc'
                          changeValue={props.incHandler}
                          disabledBtn={disabledBtn}
                />
                <MyButton title='reset'
                          changeValue={props.resetHandler}
                          disabledBtn={props.settingsActive}

                />
            </div>
        </div>
    )
}


export default Counter;
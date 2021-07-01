import React from 'react';
import '../App.css';
import Display from "./Display";
import MyButton from "./MyButton";
import s from './Counter.module.css'

type CounterPropsType = {
    value: number
    error: string
    maxValue: number
    startValue: number
    validValue: boolean
    incHandler: () => void
    resetHandler: () => void
}


function Counter(props: CounterPropsType) {

    let disabledBtn = !!props.error || props.validValue
    /* let disabledReset = !!props.error*/

    return (
        <div className={s.counter}>
            <Display value={props.value}
                     error={props.error}
                     validValue={props.validValue}
            />


            <div className={s.btnWrapper}>
                <MyButton title='inc'
                          changeValue={props.incHandler}
                          disabledBtn={disabledBtn}
                />
                <MyButton title='reset'
                          changeValue={props.resetHandler}
                          disabledBtn={props.validValue}

                />
            </div>
        </div>
    )
}


export default Counter;
import React from 'react';
import '../App.css';
import s from './Display.module.css'

type DisplayType = {
    value: number
    error?: string
    validValue: boolean
}


function Display(props: DisplayType) {
    let style = `${s.value} ${props.error ? s.endValue : ''}`
    return (
        <div className={s.scoreboard}>
            {props.validValue && !props.error ? <div>enter values</div> :
                <div className={style}>{props.error && props.error !== '_MAX' ? props.error : props.value}</div>}
        </div>
    )
}

export default Display;




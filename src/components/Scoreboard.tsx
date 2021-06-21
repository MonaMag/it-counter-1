import React from 'react';
import '../App.css';
import s from './Scoreboard.module.css'

type ScoreboardType = {
    value: number
    maxValue: number
}


function Scoreboard(props: ScoreboardType) {
    let style =`${s.value} ${props.value === props.maxValue ? s.endValue : ''}`
    return (
        <div className={s.scoreboard}>
            <div className={style}>{props.value}</div>
        </div>
    )
}

export default Scoreboard;


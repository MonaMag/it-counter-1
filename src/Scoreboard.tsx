import React from 'react';
import './App.css';

type ScoreboardType = {
    value: number
}

function Scoreboard(props: ScoreboardType) {
    return (
        <div className={props.value === 5 ? 'red' : 'black'}>
            <div className='scoreboard'>{props.value}</div>
        </div>
    )
}


export default Scoreboard;
import React, {useState} from 'react';
import './App.css';
import ResetButton from './ResetButton';
import Scoreboard from "./Scoreboard";
import IncreaseButton from "./IncreaseButton";

function App() {
    const [value, setValue] = useState<number>(0);

    const incHandler = () =>  {
        setValue(value + 1);
    }
    const resetHandler = () =>  {
        setValue(0);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='wrapper'>
                    <Scoreboard value={value}/>
                    <div className='counter'>
                        <IncreaseButton value={value} incHandler={incHandler} />
                        <ResetButton value={value} resetHandler={resetHandler}/>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import ResetButton from './ResetButton';
import Scoreboard from "./Scoreboard";
import IncreaseButton from "./IncreaseButton";


function App() {
    let [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <div className='wrapper'>
                    <Scoreboard/>
                    <div className='counter'>
                        <IncreaseButton/>
                        <ResetButton/>
                    </div>
                </div>

            </header>
        </div>
    );
}

export default App;

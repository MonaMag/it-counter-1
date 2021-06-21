import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";


function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [value, setValue] = useState<number>(startValue);
    const [maxValue, setMaxValue] = useState<number>(5);

    const incHandler = () => setValue(value + 1);
    const resetHandler = () => setValue(0);


    return (
        <div className="App">
            <header className="App-wrapper">
                <Settings value={value}
                          maxValue={maxValue}
                          startValue={startValue}/>
                <Counter value={value}
                         maxValue={maxValue}
                         startValue={startValue}
                         incHandler={incHandler}
                         resetHandler={resetHandler}/>

            </header>

        </div>
    );
}

export default App;

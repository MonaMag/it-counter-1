import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";



function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [value, setValue] = useState<number>(startValue);
    const [error, setError] = useState('');

    const incHandler = () => setValue(value + 1);
    const resetHandler = () => setValue(0);

    const isError = () => {
        let error = '';
        if (startValue < 0 || startValue >= maxValue  || maxValue <0 ) {
            error = 'incorrect value'
        }
        return error;
    }

    const ChangeMaxValue = (newMaxValue: number) => {
        setValue(0);
        setMaxValue(newMaxValue);
        let error = isError();
        setError(error);

    }
    const ChangeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue);
        let error = isError();
        setError(error);
    }

    const onClickSetButton = () => {
        let error = isError();
        if (!error) {
            setValue(startValue)
        }
        setError(error);
    }


    return (
        <div className="App">
            <header className="App-wrapper">
                <Settings maxValue={maxValue}
                          startValue={startValue}
                          error={error}
                          ChangeMaxValue={ChangeMaxValue}
                          ChangeStartValue={ChangeStartValue}
                          onClickSetButton={ onClickSetButton}

                />
                <Counter value={value}
                         error={!error && value >= maxValue ? '_MAX' : error ? error : ''}
                         maxValue={maxValue}
                         startValue={startValue}
                         incHandler={incHandler}
                         resetHandler={resetHandler}
                />

            </header>

        </div>
    );
}

export default App;

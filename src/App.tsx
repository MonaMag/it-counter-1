import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [value, setValue] = useState<number>(startValue);
    /*const [error, setError] = useState('');*/
    const [validValue, setValidValue] = useState(false);

    const incHandler = () => setValue(value + 1);
    const resetHandler = () => setValue(0);

    const isError = () => {
        let error = '';
        if (startValue < 0 || startValue >= maxValue || maxValue < 0) {
            error = 'incorrect value'
        }
        return error;
    }

    const ChangeMaxValue = (newMaxValue: number) => {
        setValidValue(true);
        setValue(0);
        setMaxValue(newMaxValue);

    }
    const ChangeStartValue = (newStartValue: number) => {
        setValidValue(true);
        setStartValue(newStartValue);
        /*let error = isError();
        setError(error);*/
    }

    const onClickSetButton = () => {
        setValidValue(false);
        if (!error) {
            setValue(startValue)
        }
    }
    let error = isError()


    return (
        <div className="App">
            <header className="App-wrapper">
                <Settings maxValue={maxValue}
                          startValue={startValue}
                          error={error}
                          validValue={validValue}
                          ChangeMaxValue={ChangeMaxValue}
                          ChangeStartValue={ChangeStartValue}
                          onClickSetButton={onClickSetButton}

                />
                <Counter value={value}
                         error={!error && value >= maxValue ? '_MAX' : error ? error : ''}
                         maxValue={maxValue}
                         startValue={startValue}
                         validValue={validValue}
                         incHandler={incHandler}
                         resetHandler={resetHandler}
                />

            </header>

        </div>
    );
}

export default App;

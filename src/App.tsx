import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";


function App() {






    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [value, setValue] = useState<number>(startValue);
    /*const [error, setError] = useState('');*/
    const [validValues, setValidValues] = useState(false);


    useEffect(()=> {

        let startValueString = localStorage.getItem("startValue");
        let maxValueString = localStorage.getItem("maxValue");
        if(startValueString) {
            let newStartValue = JSON.parse(startValueString);
            setStartValue(newStartValue);
            setValue(newStartValue);

        }
        if(maxValueString) {
            let newMaxValue = JSON.parse(maxValueString);
            setMaxValue(newMaxValue);
        }

    }, [])


    const incHandler = () => setValue(value + 1);
    const resetHandler = () => setValue(startValue);

    const isError = () => {
        let error = '';
        if (startValue < 0 || startValue >= maxValue || maxValue < 0) {
            error = 'incorrect value'
        }
        return error;
    }

    const ChangeMaxValue = (newMaxValue: number) => {
        setValidValues(true);
        setValue(0);
        setMaxValue(newMaxValue);

    }
    const ChangeStartValue = (newStartValue: number) => {
        setValidValues(true);
        setStartValue(newStartValue);
        /*let error = isError();
        setError(error);*/
    }

    const onClickSetButton = () => {
   /*     localStorage.setItem('valuesOfSettings', JSON.stringify({startValue: startValue, maxValue: maxValue}));*/
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
        setValidValues(false);
        if (!error) {
            setValue(startValue)
        }
    }

    let error = isError();

    return (
        <div className="App">
            <header className="App-wrapper">
                <Settings maxValue={maxValue}
                          startValue={startValue}
                          error={error}
                          validValues={validValues}
                          ChangeMaxValue={ChangeMaxValue}
                          ChangeStartValue={ChangeStartValue}
                          onClickSetButton={onClickSetButton}

                />
                <Counter value={value}
                         error={!error && value >= maxValue ? '_MAX' : error ? error : ''}
                         maxValue={maxValue}
                         startValue={startValue}
                         validValues={validValues}
                         incHandler={incHandler}
                         resetHandler={resetHandler}
                />

            </header>

        </div>
    );
}

export default App;








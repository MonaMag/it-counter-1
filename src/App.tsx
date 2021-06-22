import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";


function App() {

    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [value, setValue] = useState<number>(startValue);
    const [settingValidValue, setSettingValidValue] = useState(false);

    const incHandler = () => setValue(value + 1);
    const resetHandler = () => setValue(0);


    const ChangeMaxValue = (newMaxValue: number) => {
        setValue(0);
        setMaxValue(newMaxValue);
        setSettingValidValue(true);

    }
    const ChangeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue);
        setSettingValidValue(true);
    }

    const onClickSetButton = () => {
        setValue(startValue);
        setSettingValidValue(settingValidValue);
    }


    return (
        <div className="App">
            <header className="App-wrapper">
                <Settings maxValue={maxValue}
                          startValue={startValue}
                          settingValidValue={settingValidValue}
                          ChangeMaxValue={ChangeMaxValue}
                          ChangeStartValue={ChangeStartValue}
                          onClickSetButton={ onClickSetButton}

                />
                <Counter value={value}
                         maxValue={maxValue}
                         startValue={startValue}
                         settingValidValue={settingValidValue}
                         incHandler={incHandler}
                         resetHandler={resetHandler}
                />

            </header>

        </div>
    );
}

export default App;

import React, {useCallback, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    CounterReducerActionsType, onChangeCounterValueAC,
    onChangeMaxValueAC, onChangeStartValueAC, onSetButtonAClickAC, setCounterInitialValueAC,
} from "./bll/counter-reducer";
import {Dispatch} from "redux";


function App() {
    const state = useSelector((state: AppStateType) => state.counter)
    const dispatch = useDispatch<Dispatch<CounterReducerActionsType>>()

    const incHandler = () => dispatch(onChangeCounterValueAC(state.counterValue + 1))
    const resetHandler = () => {
        dispatch(onChangeCounterValueAC(state.startValue))
        dispatch(setCounterInitialValueAC(state.startValue, state.maxValue))
    }


    //const [startValue, setStartValue] = useState<number>(0);
    //const [maxValue, setMaxValue] = useState<number>(5);
    //const [value, setValue] = useState<number>(startValue);
    //const [validValues, setValidValues] = useState(false);
    /*
        useEffect(() => {
            let startValueString = localStorage.getItem("startValue");
            let maxValueString = localStorage.getItem("maxValue");
            if (startValueString) {
                let newStartValue = JSON.parse(startValueString);
                setStartValue(newStartValue);
               setValue(newStartValue);
            }
            if (maxValueString) {
                let newMaxValue = JSON.parse(maxValueString);
                setMaxValue(newMaxValue);
            }
        }, [])
    */
    /*
        const isError = () => {
            let error = '';
            if (state.startValue < 0 || state.startValue >= state.maxValue || state.maxValue < 0) {
                error = 'incorrect value'
            }
            return error;
        }
    */


    const onChangeMaxValue = useCallback((newMaxValue: number) => {
        dispatch(onChangeMaxValueAC(newMaxValue));
        dispatch(onChangeCounterValueAC(newMaxValue));
    }, [dispatch]);

    const onChangeStartValue = useCallback((newStartValue: number) =>
        dispatch(onChangeStartValueAC(newStartValue)), [dispatch])
    const onSetButtonClick = useCallback(() =>
        dispatch(onSetButtonAClickAC()), [dispatch])

    /*  localStorage.setItem("startValue", JSON.stringify(startValue))
      localStorage.setItem("maxValue", JSON.stringify(maxValue));*/
    /*  let error = isError();

      setValidValues(false);
      if (!error) {
          onChangeCounterValueAC(state.startValue)
      }
  */

    return (
        <div className="App">
            <header className="App-wrapper">
                <Settings startValue={state.startValue}
                          maxValue={state.maxValue}
                          settingsActive={state.settingsIsActive}
                    //error={error}
                    //validValues={validValues}
                          onChangeMaxValue={onChangeMaxValue}
                          onChangeStartValue={onChangeStartValue}
                          onSetButtonClick={onSetButtonClick}

                />
                <Counter counterValue={state.counterValue}
                    //error={!error && state.counterValue >= state.maxValue ? '_MAX' : error ? error : ''}
                         startValue={state.startValue}
                         maxValue={state.maxValue}
                         settingsActive={state.settingsIsActive}
                    //validValues={validValues}
                         incHandler={incHandler}
                         resetHandler={resetHandler}
                />
            </header>
        </div>
    )

}

export default App;








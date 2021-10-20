import React, {useCallback} from 'react';
import './App.css';
import Counter from "./components/Counter";
import {MemoSettings} from "./components/Settings";
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


    const onChangeMaxValue = useCallback((newMaxValue: number) => {
        dispatch(onChangeMaxValueAC(newMaxValue));
        dispatch(onChangeCounterValueAC(newMaxValue));
    }, [dispatch]);

    const onChangeStartValue = useCallback((newStartValue: number) =>
        dispatch(onChangeStartValueAC(newStartValue)), [dispatch])
    const onSetButtonClick = useCallback(() =>
        dispatch(onSetButtonAClickAC()), [dispatch])


    return (
        <div className="App">
            <header className="App-wrapper">
                <MemoSettings startValue={state.startValue}
                          maxValue={state.maxValue}
                          settingsActive={state.settingsIsActive}
                          onChangeMaxValue={onChangeMaxValue}
                          onChangeStartValue={onChangeStartValue}
                          onSetButtonClick={onSetButtonClick}

                />
                <Counter counterValue={state.counterValue}
                         startValue={state.startValue}
                         maxValue={state.maxValue}
                         settingsActive={state.settingsIsActive}
                         incHandler={incHandler}
                         resetHandler={resetHandler}
                />
            </header>
        </div>
    )

}

export default App;








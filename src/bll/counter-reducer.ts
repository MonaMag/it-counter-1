

const initialState = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    settingsIsActive: false,
}

export type CounterReducerStateType = typeof initialState
export type CounterReducerActionsType = ReturnType<typeof onChangeCounterValueAC>
    | ReturnType<typeof onChangeMaxValueAC>
    | ReturnType<typeof onChangeStartValueAC>
    | ReturnType<typeof onSetButtonAClickAC>
    | ReturnType<typeof setCounterInitialValueAC>


export const counterReducer = (state: CounterReducerStateType = initialState,
                               action: CounterReducerActionsType): CounterReducerStateType => {
    switch (action.type) {
        case "mona/counter-reducer/CHANGE-COUNTER-VALUE":
            return {
                ...state, counterValue: action.newValue
            }
        case "mona/counter-reducer/MAX-VALUE-CHANGE":
            return {
                ...state, maxValue: action.newMaxValue, settingsIsActive: true, counterValue: 0
            }
        case "mona/counter-reducer/START-VALUE-CHANGE":
            return {
                ...state, startValue: action.newStartValue, settingsIsActive: true
            }
        case "mona/counter-reducer/ON-SET-BUTTON-CLICK":
            return {
                ...state, settingsIsActive: false, counterValue: state.startValue
            }
        case "mona/counter-reducer/SET-COUNTER-INITIAL-VALUE":
            return {
                ...state, counterValue: action.startValue, startValue: action.startValue, maxValue: action.maxValue
            }
        default:
            return state
    }
}


//* Action Creators --------------------------------------------------------------------------->
export const onChangeCounterValueAC = (newValue: number) => ({type: 'mona/counter-reducer/CHANGE-COUNTER-VALUE', newValue} as const)
export const onChangeMaxValueAC = (newMaxValue: number) => ({type: 'mona/counter-reducer/MAX-VALUE-CHANGE', newMaxValue} as const)
export const onChangeStartValueAC = (newStartValue: number) => ({type: 'mona/counter-reducer/START-VALUE-CHANGE', newStartValue} as const)
export const onSetButtonAClickAC = () => ({type: 'mona/counter-reducer/ON-SET-BUTTON-CLICK'} as const)
export const setCounterInitialValueAC = (startValue: number, maxValue: number) => ({type: 'mona/counter-reducer/SET-COUNTER-INITIAL-VALUE', startValue, maxValue} as const)




export type mainValueType = { minValue: number, maxValue: number }


const InitialState = {
    count: 0,
    mainValue: {minValue: 0, maxValue: 0}
}

export type InitialStateType = typeof InitialState

export const CounterReducer = (state: InitialStateType = InitialState, action: MainActionType): InitialStateType => {
    switch (action.type) {
        case "INC-COUNTER": {
            return {...state, count: state.count + 1}
        }
        case "SET-VALUE-FOR-COUNTER": {
            return {...state, count: action.value}
        }
        case "SET-MAIN-VALUE": {
            return {...state, mainValue: {...action.object}}
        }
        default:
            return state
    }


}

export type MainActionType = IncrementCounterActionType
    | SetValueForCounterActionType
    | SetMainValueActionType

export type IncrementCounterActionType = ReturnType<typeof incrementCounterAC>

export const incrementCounterAC = () => {
    return {
        type: 'INC-COUNTER',
    } as const
}

export type SetValueForCounterActionType = ReturnType<typeof setValueForCounterAC>
export const setValueForCounterAC = (value: number) => {
    return {
        type: 'SET-VALUE-FOR-COUNTER',
        value
    } as const
}

export type SetMainValueActionType = ReturnType<typeof setMainValueAC>
export const setMainValueAC = (object:mainValueType) => {
    return {
        type: 'SET-MAIN-VALUE',
        object
    } as const
}
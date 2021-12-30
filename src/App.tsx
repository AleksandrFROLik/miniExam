import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, mainValueType, setMainValueAC, setValueForCounterAC} from "./bll/CounterReducer";
import {disabledCounterAC} from "./bll/DisabledReducer";
import {warningCounterAC} from "./bll/WarningReducer";
import {rootReducerType, store} from './bll/store';


function App() {

    const mainValue = useSelector<rootReducerType, mainValueType>(state => state.counter.mainValue)
    const dispatch = useDispatch()

    useEffect(() => {
        if (mainValue.minValue < 0 || mainValue.minValue > mainValue.maxValue || mainValue.maxValue < 0 || (mainValue.minValue > 0 && mainValue.maxValue > 0 && mainValue.minValue === mainValue.maxValue)) {
            dispatch(warningCounterAC('Incorrect value'))
        } else if (mainValue.minValue > 0 || mainValue.minValue < mainValue.maxValue || mainValue.maxValue > 0) {
            dispatch(warningCounterAC('enter value and press "set"'))
        }
    }, [mainValue.minValue, mainValue.maxValue, dispatch])

    useEffect(() => {
        if (mainValue.minValue === 0 && mainValue.maxValue === 0) {
            dispatch(warningCounterAC('enter value and press "set"'))
        }
        dispatch(setMainValueAC({
            maxValue: store.getState().counter.mainValue.maxValue,
            minValue: store.getState().counter.mainValue.minValue
        }))
        dispatch(disabledCounterAC(false))

    }, [dispatch])


    const callBackHandlerForSet = () => {
        dispatch(setValueForCounterAC(mainValue.minValue))
        dispatch(disabledCounterAC(true))
        dispatch(warningCounterAC(null))
    }

    const minInput = (min: number) => {
        dispatch(setMainValueAC({...mainValue, minValue: min}))
        dispatch(disabledCounterAC(false))
    }

    const maxInput = (max: number) => {
        dispatch(setMainValueAC({...mainValue, maxValue: max}))
        dispatch(disabledCounterAC(false))
    }

    return (
        <div className="App">
            <Setting callBackHandlerForSet={callBackHandlerForSet}
                     minInput={minInput}
                     maxInput={maxInput}
            />
            <Counter/>
        </div>
    );
}

export default App;



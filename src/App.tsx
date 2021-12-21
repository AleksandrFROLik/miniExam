import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";
import {useDispatch} from "react-redux";
import {setValueForCounterAC} from "./bll/CounterReducer";
import {disabledCounterAC} from "./bll/DisabledReducer";
import {warningCounterAC} from "./bll/WarningReducer";


export type mainValueType = { minValue: number, maxValue: number }

function App() {

    let [mainValue, setMainValue] = useState({minValue: 0, maxValue: 0})

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

        let minString = localStorage.getItem('minValue')
        let maxString = localStorage.getItem('maxValue')

        if (minString && maxString) {
            setMainValue({maxValue: +maxString, minValue: +minString})
        }
        dispatch(disabledCounterAC(false))

    }, [dispatch])


    const callBackHandlerForSet = () => {
        dispatch(setValueForCounterAC(mainValue.minValue))

        dispatch(disabledCounterAC(true))
        dispatch( warningCounterAC(null))
        localStorage.setItem("minValue", mainValue.minValue.toString())
        localStorage.setItem("maxValue", mainValue.maxValue.toString())
    }

    const minInput = (min: number) => {
        setMainValue({...mainValue, minValue: min})
        dispatch(disabledCounterAC(false))
    }

    const maxInput = (max: number) => {
        setMainValue({...mainValue, maxValue: max})
        dispatch(disabledCounterAC(false))
    }

    return (
        <div className="App">
            <Setting callBackHandlerForSet={callBackHandlerForSet}
                     minInput={minInput}
                     maxInput={maxInput}
                     mainValue={mainValue}

            />
            <Counter
                mainValue={mainValue}
            />
        </div>
    );
}

export default App;



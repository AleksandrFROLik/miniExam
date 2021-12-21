import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";
import {useDispatch} from "react-redux";
import {setValueForCounterAC} from "./bll/CounterReducer";


export type mainValueType = { minValue: number, maxValue: number }

function App() {

    let [mainValue, setMainValue] = useState({minValue: 0, maxValue: 0})
    let [disabled, setDisabled] = useState<boolean>(false)
    let [begin, setBegin] = useState<string | null>(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (mainValue.minValue < 0 || mainValue.minValue > mainValue.maxValue || mainValue.maxValue < 0 || (mainValue.minValue > 0 && mainValue.maxValue > 0 && mainValue.minValue === mainValue.maxValue)) {
            setBegin('Incorrect value')
        } else if (mainValue.minValue > 0 || mainValue.minValue < mainValue.maxValue || mainValue.maxValue > 0) {
            setBegin('enter value and press "set"')
        }
    }, [mainValue.minValue, mainValue.maxValue])

    useEffect(() => {
        if (mainValue.minValue === 0 && mainValue.maxValue === 0) {
            setBegin('enter value and press "set"')
        }

        let minString = localStorage.getItem('minValue')
        let maxString = localStorage.getItem('maxValue')

        if (minString && maxString) {
            setMainValue({maxValue: +maxString, minValue: +minString})
        }
        setDisabled(false)


    }, [])


    const callBackHandlerForSet = () => {
        dispatch(setValueForCounterAC(mainValue.minValue))

        setDisabled(true)
        setBegin(null)
        localStorage.setItem("minValue", mainValue.minValue.toString())
        localStorage.setItem("maxValue", mainValue.maxValue.toString())
    }

    const minInput = (min: number) => {
        setMainValue({...mainValue, minValue: min})
        setDisabled(false)
    }

    const maxInput = (max: number) => {
        setMainValue({...mainValue, maxValue: max})
        setDisabled(false)
    }

    return (
        <div className="App">
            <Setting callBackHandlerForSet={callBackHandlerForSet}
                     minInput={minInput}
                     maxInput={maxInput}
                     mainValue={mainValue}
                     disabled={disabled}
            />
            <Counter
                mainValue={mainValue}
                disabled={disabled}
                begin={begin}
            />
        </div>
    );
}

export default App;



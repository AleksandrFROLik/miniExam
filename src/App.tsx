import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";


function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [finishValue, setFinishValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(startValue)
    let [disabled, setDisabled] = useState<boolean>(false)
    let [alarm, setAlarm] = useState<string | null>(null)
    let [begin, setBegin] = useState<string | null>(null)
    let [edit, setEdit] = useState<boolean>(false)

    useEffect(() => { // useEffect нужен для отрисовки при перезагрузке страницы, чтоб значение в input не равнялось нулю.
        let minString = localStorage.getItem('minValue')
        if (minString) {
            let minNumber = JSON.parse(minString)
            setStartValue(minNumber)
            setCounter(minNumber)
            setDisabled(true)
            setEdit(false)

        }
    }, [])

    useEffect(() => {
        let maxString = localStorage.getItem('maxValue')
        if (maxString) {
            let maxNumber = JSON.parse(maxString)
            setFinishValue(maxNumber)
        }
    }, [])

    const callBackHandlerForSet = () => {
        setCounter(startValue)
        setDisabled(true)
        setEdit(false)
        localStorage.setItem("minValue", startValue.toString())
        localStorage.setItem("maxValue", finishValue.toString())
    }

    const minInput = (min: number) => {
        setStartValue(min)
        setDisabled(false)
    }

    const maxInput = (max: number) => {
        setFinishValue(max)
        setDisabled(false)
    }

    return (
        <div className="App">
            <Setting callBackHandlerForSet={callBackHandlerForSet}
                     minInput={minInput}
                     maxInput={maxInput}
                     startValue={startValue}
                     finishValue={finishValue}
                     disabled={disabled}
            />
            <Counter
                startValue={startValue}
                finishValue={finishValue}
                counter={counter}
                setCounter={setCounter}
                disabled={disabled}
                alarm={alarm}
                edit={edit}
                setAlarm={setAlarm}
                setEdit={setEdit}
                begin={begin}
                setBegin={setBegin}

            />
        </div>
    );
}

export default App;



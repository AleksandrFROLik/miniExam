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


    useEffect(() => { //useEffect  отрабатыввает в самом начале.

        if (startValue === 0 && finishValue === 0) {
            setEdit(true)
            setBegin('enter value and press "set"')
        }
        console.log('1')
    },[])

    useEffect(() => { //useEffect  отрабатыввает при изменении startValue
        console.log('2')
        if (startValue < 0 || startValue > finishValue || finishValue < 0 || (startValue>0 && finishValue>0 && startValue === finishValue)) {
            setAlarm('Incorrect value')
            setEdit(true)
        } else if (startValue > 0 || startValue < finishValue || finishValue > 0) {
            setAlarm(null)
            setEdit(true)
            setBegin('enter value and press "set"')
        }

    },[startValue, finishValue])

    useEffect(() => { //useEffect применяется когда обновляется страница
        console.log('3')
        let minString = localStorage.getItem('minValue')
        if (minString) {
            let minNumber = JSON.parse(minString)
            setStartValue(minNumber)
            setCounter(minNumber)
        }
        setDisabled(true)

        let maxString = localStorage.getItem('maxValue')
        if (maxString) {
            let maxNumber = JSON.parse(maxString)
            setFinishValue(maxNumber)
        }

    }, [])



    console.log(edit)


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
                     alarm={alarm}
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



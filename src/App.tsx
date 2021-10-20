import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";


function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [finishValue, setFinishValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(startValue)

    useEffect(()=>{
        let minString = localStorage.getItem('minValue')
        if(minString) {
            let minNumber = JSON.parse(minString)
            setCounter(minNumber)
        }
    },[])
    useEffect(()=>{
        let maxString = localStorage.getItem('maxValue')
        if(maxString) {
            let maxNumber = JSON.parse(maxString)
            setFinishValue(maxNumber)
        }
    },[])

    const callBackHandlerForSetHandler = () => {
        setCounter(startValue)
    }
    const minInput = (value:string) => {
        localStorage.setItem('minValue', value)
        let min = JSON.parse(value)
        setStartValue(min)

    }
    const maxInput = (value:string) => {
        localStorage.setItem('maxValue', value)
        let max = JSON.parse(value)
        setFinishValue(max)
    }
    return (
        <div className="App">
            <Setting callBackHandlerForSet={callBackHandlerForSetHandler}
                     minInput={minInput}
                     maxInput={maxInput}
            />
            <Counter
                startCounter={startValue}
                finishCounter={finishValue}
                counter={counter}
                setCounter={setCounter}
            />
        </div>
    );
}

export default App;

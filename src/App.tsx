import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";


function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [finishValue, setFinishValue] = useState<number>(0)
    let [counter, setCounter] = useState<number>(startValue)
    let[error, setError]=useState<boolean>(false)




    useEffect(()=>{ // useEffect нужен для отрисовки при перезагрузке страницыБ чтоб значение в input не равнялось нулю.
        let minString = localStorage.getItem('minValue')
        if(minString) {
            let minNumber = JSON.parse(minString)
            setStartValue(minNumber)
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

    const callBackHandlerForSet = () => {
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
            <Setting callBackHandlerForSet={callBackHandlerForSet}
                     minInput={minInput}
                     maxInput={maxInput}
                     startValue={startValue}
                     finishValue={finishValue}
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

import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";



export type mainValueType = {minValue:number, maxValue:number}

function App() {

    let [mainValue, setMainValue] = useState({minValue:0, maxValue:0})
    let [counter, setCounter] = useState<number>(mainValue.minValue)
    let [disabled, setDisabled] = useState<boolean>(false)
    let [begin, setBegin] = useState<string | null>(null)


    useEffect(() => { //useEffect  отрабатыввает в самом начале.
        if (mainValue.minValue === 0 && mainValue.maxValue === 0) {
            setBegin('enter value and press "set"')
        }
    },[])

    useEffect(() => { //useEffect  отрабатыввает при изменении startValue
        if (mainValue.minValue  < 0 || mainValue.minValue  > mainValue.maxValue || mainValue.maxValue < 0 || (mainValue.minValue >0 && mainValue.maxValue>0 && mainValue.minValue  === mainValue.maxValue)) {
            setBegin('Incorrect value')
        } else if (mainValue.minValue  > 0 || mainValue.minValue < mainValue.maxValue || mainValue.maxValue > 0) {
            setBegin('enter value and press "set"')
        }
    },[mainValue.minValue, mainValue.maxValue])

    useEffect(() => { //useEffect применяется когда обновляется страница

        let minString = localStorage.getItem('minValue')
        if (minString) {
            let minNumber = JSON.parse(minString)
            setMainValue({...mainValue, minValue: minNumber})
        }
        setDisabled(false)

        let maxString = localStorage.getItem('maxValue')
        if (maxString) {
            let maxNumber = JSON.parse(maxString)
            setMainValue({...mainValue, maxValue: maxNumber})
        }
    }, [])


    const callBackHandlerForSet = () => {
        setCounter(mainValue.minValue)
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
                counter={counter}
                setCounter={setCounter}
                disabled={disabled}
                begin={begin}
            />
        </div>
    );
}

export default React.memo(App) ;



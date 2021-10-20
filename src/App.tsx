import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setting} from "./components/Setting/Setting";

// import {Counter} from "./components/Counter";


function App() {
    const startCounter = 0
    const finishCounter = 5

    let [counter, setCounter] = useState<number>(startCounter)










    const callBackHandlerForSetHandler = () => {

    }
    return (
        <div className="App">
            <Setting callBackHandlerForSet={callBackHandlerForSetHandler}/>
            <Counter
                startCounter={startCounter}
                finishCounter={finishCounter}
                counter={counter}
                setCounter={setCounter}
            />
        </div>
    );
}

export default App;

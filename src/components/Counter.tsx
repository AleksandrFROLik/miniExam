import React from "react";
import styles from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";

type  propsTypeCounter = {
    startCounter: number
    finishCounter: number
    counter: number
    setCounter: (counter: number) => void
}

export const Counter: React.FC<propsTypeCounter> = ({
                                                        startCounter,
                                                        finishCounter,
                                                        counter,
                                                        setCounter,
                                                        ...props
                                                    }: propsTypeCounter) => {
    const callBackHandlerForIncr = () => {

        if (counter >= finishCounter) {
            return
        }
        let result = counter + 1
        setCounter(result)
    }
    const callBAckHandlerForReset = () => {
        console.log('hello')
        setCounter(startCounter)}


    return (
        <div className={styles.counterWrapper}>
            <Display
                startCounter={startCounter}
                finishCounter={finishCounter}
                counter={counter}/>
            <div className={styles.button}>
                <Button startCounter={startCounter}
                        finishCounter={finishCounter}
                        callBack={callBackHandlerForIncr}
                        disabled={counter === finishCounter}
                        name="Incr"
                />
                <Button startCounter={startCounter}
                        finishCounter={finishCounter}
                        callBack={callBAckHandlerForReset}
                        disabled={counter === startCounter}
                        name="Reset"
                />
            </div>

        </div>
    )
}
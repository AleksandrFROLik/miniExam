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
    const callBackHandlerForReset = () => {
        setCounter(startCounter)
    }



    return (
        <div className={styles.counterWrapper}>
            <Display
                finishCounter={finishCounter}
                counter={counter}/>
            <div className={styles.button}>
                <Button
                        callBack={callBackHandlerForIncr}
                        disabled={counter === finishCounter}
                        name="Incr"
                />
                <Button
                        callBack={callBackHandlerForReset}
                        disabled={counter === startCounter}
                        name="Reset"
                />
            </div>

        </div>
    )
}
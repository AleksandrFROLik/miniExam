import React from "react";
import styles from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";

type  propsTypeCounter = {
    startValue: number
    finishValue: number
    counter: number
    setCounter: (counter: number) => void
    disabled: boolean

}

export const Counter: React.FC<propsTypeCounter> = ({
                                                        startValue,
                                                        finishValue,
                                                        counter,
                                                        setCounter,
                                                        disabled,

                                                    }: propsTypeCounter) => {

    const callBackHandlerForIncr = () => {
        if (counter >= finishValue) {
            return
        }
        let result = counter + 1
        setCounter(result)
    }
    const callBackHandlerForReset = () => {
        setCounter(startValue)
    }

    return (
        <div className={styles.counterWrapper}>
            <Display
                startValue={startValue}
                finishValue={finishValue}
                counter={counter}
            />

            <div className={styles.button}>
                <Button
                    callBack={callBackHandlerForIncr}
                    disabled={!disabled}
                    // disabled={disabled || counter === finishValue || startValue >= finishValue || startValue < 0}
                    name="Incr"
                />
                <Button
                    callBack={callBackHandlerForReset}
                    disabled={!disabled || counter === startValue}
                    // disabled={!disabled || counter === startValue || startValue >= finishValue || startValue < 0}
                    name="Reset"
                />
            </div>

        </div>
    )
}
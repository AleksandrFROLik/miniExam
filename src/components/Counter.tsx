import React from "react";
import styles from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {mainValueType} from "../App";


type  propsTypeCounter = {
    counter: number
    setCounter: (counter: number) => void
    disabled: boolean
    begin: string | null,
    mainValue: mainValueType


}

export const Counter: React.FC<propsTypeCounter> = ({
                                                        counter,
                                                        setCounter,
                                                        disabled,
                                                        begin,
                                                        mainValue,
                                                    }: propsTypeCounter) => {

    const callBackHandlerForIncr = () => {
        setCounter(counter + 1)
    }

    const callBackHandlerForReset = () => {
        setCounter(mainValue.minValue)
    }

    return (
        <div className={styles.counterWrapper}>
            <Display
                mainValue={mainValue}
                counter={counter}
                begin={begin}
            />

            <div className={styles.button}>
                <Button
                    callBack={callBackHandlerForIncr}
                    disabled={!disabled || counter >= mainValue.maxValue}
                    name="Incr"
                />
                <Button
                    callBack={callBackHandlerForReset}
                    disabled={!disabled || counter === mainValue.minValue}
                    name="Reset"
                />
            </div>

        </div>
    )
}
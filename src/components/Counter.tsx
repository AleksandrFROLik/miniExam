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
    alarm: string | null
    edit: boolean
    setEdit: (edit: boolean) => void
    begin: string | null


}

export const Counter: React.FC<propsTypeCounter> = ({
                                                        startValue,
                                                        finishValue,
                                                        counter,
                                                        setCounter,
                                                        disabled,
                                                        alarm,
                                                        edit,
                                                        begin
                                                    }: propsTypeCounter) => {

    const callBackHandlerForIncr = () => {
        setCounter(counter + 1)
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
                alarm={alarm}
                edit={edit}
                begin={begin}
            />

            <div className={styles.button}>
                <Button
                    callBack={callBackHandlerForIncr}
                    disabled={!disabled || counter === finishValue}
                    name="Incr"
                />
                <Button
                    callBack={callBackHandlerForReset}
                    disabled={!disabled || counter === startValue}
                    name="Reset"
                />
            </div>

        </div>
    )
}
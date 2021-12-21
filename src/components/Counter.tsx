import React from "react";
import styles from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {mainValueType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../bll/store";
import {incrementCounterAC, setValueForCounterAC} from "../bll/CounterReducer";


type  propsTypeCounter = {
    disabled: boolean
    begin: string | null,
    mainValue: mainValueType
}

export const Counter: React.FC<propsTypeCounter> = ({
                                                        disabled,
                                                        begin,
                                                        mainValue,
                                                    }: propsTypeCounter) => {

    const counter = useSelector<rootReducerType, number>(state => state.counter.count)
    const dispatch = useDispatch()

    const callBackHandlerForIncr = () => {
        dispatch(incrementCounterAC())
    }

    const callBackHandlerForReset = () => {
        dispatch(setValueForCounterAC(mainValue.minValue))
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
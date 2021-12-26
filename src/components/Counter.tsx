import React from "react";
import styles from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../bll/store";
import {incrementCounterAC, mainValueType, setValueForCounterAC} from "../bll/CounterReducer";


export const Counter = () => {

    const counter = useSelector<rootReducerType, number>(state => state.counter.count)
    const mainValue = useSelector<rootReducerType, mainValueType>(state => state.counter.mainValue)
    const disabled1 = useSelector<rootReducerType, boolean>(state => state.disabled.disabled)
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
            />

            <div className={styles.button}>
                <Button
                    callBack={callBackHandlerForIncr}
                    disabled={!disabled1 || counter >= mainValue.maxValue}
                    name="Incr"
                />
                <Button
                    callBack={callBackHandlerForReset}
                    disabled={!disabled1 || counter === mainValue.minValue}
                    name="Reset"
                />
            </div>

        </div>
    )
}
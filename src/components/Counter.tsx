import React from "react";
import styles from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import {mainValueType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../bll/store";
import {incrementCounterAC, setValueForCounterAC} from "../bll/CounterReducer";


type  propsTypeCounter = {
    mainValue: mainValueType
}

export const Counter: React.FC<propsTypeCounter> = ({
                                                        mainValue,
                                                    }: propsTypeCounter) => {

    const counter = useSelector<rootReducerType, number>(state => state.counter.count)
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
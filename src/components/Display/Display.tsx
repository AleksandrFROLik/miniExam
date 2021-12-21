import React from "react";
import styles from './Display.module.css'
import {mainValueType} from "../../App";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../bll/store";

type  propsTypeCounter = {
    counter: number
    mainValue: mainValueType
}

export const Display: React.FC<propsTypeCounter> = ({
                                                        counter,
                                                        mainValue,
                                                    }: propsTypeCounter) => {
    const warning = useSelector<rootReducerType, string| null>(state => state.warning.warning)
    return (
        warning
            ? <div className={styles.display}>
                <div className={(warning === 'Incorrect value') ? styles.errorEvent : styles.begin}>{warning}</div>
            </div>
            : <div className={styles.display}>
                <div className={counter === mainValue.maxValue ? styles.max : styles.textItem}>{counter}</div>
            </div>

    )
}
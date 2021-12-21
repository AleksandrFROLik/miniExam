import React from "react";
import styles from './Display.module.css'
import {mainValueType} from "../../App";

type  propsTypeCounter = {
    counter: number
    begin: string | null
    mainValue: mainValueType
}

export const Display: React.FC<propsTypeCounter> = ({
                                                        counter,
                                                        begin,
                                                        mainValue,
                                                    }: propsTypeCounter) => {
    return (
        begin
            ? <div className={styles.display}>
                <div className={(begin === 'Incorrect value') ? styles.errorEvent : styles.begin}>{begin}</div>
            </div>
            : <div className={styles.display}>
                <div className={counter === mainValue.maxValue ? styles.max : styles.textItem}>{counter}</div>
            </div>

    )
}
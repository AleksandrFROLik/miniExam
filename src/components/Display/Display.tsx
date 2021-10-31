import React from "react";
import styles from './Display.module.css'

type  propsTypeCounter = {
    startValue: number
    finishValue: number
    counter: number
    alarm: string | null
    edit: boolean
    begin: string | null
}

export const Display: React.FC<propsTypeCounter> = ({
                                                        finishValue,
                                                        counter,
                                                        alarm,
                                                        edit,
                                                        begin,
                                                    }: propsTypeCounter) => {
    return (
        edit
            ? <div className={styles.display}>
                <p className={alarm ? styles.errorEvent : styles.begin}>{alarm ? alarm : begin}</p>
            </div>
            : <div className={styles.display}>
                <p className={counter === finishValue ? styles.max : styles.textItem}>{counter}</p>
            </div>

    )
}
import React from "react";
import styles from './Display.module.css'

type  propsTypeCounter = {
    startValue: number
    finishValue: number
    counter: number
    edit: boolean
    begin: string | null
}

export const Display: React.FC<propsTypeCounter> = ({
                                                        finishValue,
                                                        counter,
                                                        edit,
                                                        begin,
                                                    }: propsTypeCounter) => {
    return (
        edit
            ? <div className={styles.display}>
                <p className={(begin === 'Incorrect value') ? styles.errorEvent : styles.begin}>{begin}</p>
            </div>
            : <div className={styles.display}>
                <p className={counter === finishValue ? styles.max : styles.textItem}>{counter}</p>
            </div>

    )
}
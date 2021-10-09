import React from "react";
import styles from './Display.module.css'

type  propsTypeCounter = {
    startCounter: number
    finishCounter: number
    counter: number

}

export const Display: React.FC<propsTypeCounter> = ({ startCounter, finishCounter, counter, ...props}:propsTypeCounter) => {

    return(
            <div className={styles.display}>
                <p className={counter===finishCounter ? styles.max : styles.textItem}>{counter}</p>
            </div>
    )
}
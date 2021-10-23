import React from "react";
import styles from './Display.module.css'

type  propsTypeCounter = {
    startValue: number
    finishValue: number
    counter: number

}

export const Display: React.FC<propsTypeCounter> = ({
                                                        startValue,
                                                        finishValue,
                                                        counter,

                                                        ...props
                                                    }: propsTypeCounter) => {

    return (

        <div className={styles.display}>
            <p className={counter === finishValue ? styles.max : styles.textItem}>{counter}</p>
        </div>
    )
}
import React, {ChangeEvent, useState} from "react";
import styles from "./DisplaySetting.module.css";

type DisplaySettingType = {
    minInput: (value: string) => void
    maxInput: (value: string) => void
    startValue: number
    finishValue: number

}

export const DisplaySetting = ({minInput, maxInput, startValue, finishValue}: DisplaySettingType) => {



    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        minInput(e.currentTarget.value)
    }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        maxInput(e.currentTarget.value)
    }


    return (
        <div className={styles.display}>
            <div className={styles.inputItems}>
                <p>Min</p>
                <input
                    value={startValue}
                    type='number'
                    placeholder='Введите число'
                    onChange={onChangeHandlerMin}
                   className={styles.error}
                />
                <p>Max</p>
                <input
                    value={finishValue}
                    type='number'
                    placeholder='Введите число'
                    onChange={onChangeHandlerMax}
                />
            </div>

        </div>
    )
}
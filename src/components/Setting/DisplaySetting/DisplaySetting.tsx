import React, {ChangeEvent} from "react";
import styles from "./DisplaySetting.module.css";

type DisplaySettingType = {
    minInput: (min: number) => void
    maxInput: (max: number) => void
    startValue: number
    finishValue: number
}

export const DisplaySetting = ({minInput, maxInput, startValue, finishValue}: DisplaySettingType) => {

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = e.currentTarget.value
        let min = JSON.parse(minValue)
        minInput(min)
    }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.value
        let max = JSON.parse(maxValue)
        maxInput(max)
    }

    return (
        <div className={styles.display}>
            <div className={styles.inputItems}>
                <p>max value</p>
                <input
                    value={finishValue}
                    type='number'
                    onChange={onChangeHandlerMax}
                    className={finishValue < 0 || startValue === finishValue || startValue > finishValue ? styles.error : styles.noError}
                />
                <p>start value</p>
                <input
                    value={startValue}
                    type='number'
                    onChange={onChangeHandlerMin}
                    className={startValue < 0 || startValue === finishValue || startValue > finishValue ? styles.error : styles.noError}
                />
            </div>

        </div>
    )
}
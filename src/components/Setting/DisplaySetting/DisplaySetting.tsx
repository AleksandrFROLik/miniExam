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
        if(min >= 0)localStorage.setItem("minValue", minValue)

    }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.value
        let max = JSON.parse(maxValue)
        maxInput(max)
        if(max > 0) localStorage.setItem("maxValue", maxValue)
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
                    className={startValue < 0 ? styles.error : styles.noError}
                />
                <p>Max</p>
                <input
                    value={finishValue}
                    type='number'
                    placeholder='Введите число'
                    onChange={onChangeHandlerMax}
                    className={finishValue < 0 ? styles.error : styles.noError}
                />
            </div>

        </div>
    )
}
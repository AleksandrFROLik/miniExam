import React, {ChangeEvent} from "react";
import styles from "./DisplaySetting.module.css";

type DisplaySettingType = {
    minInput: (value: string) => void
    maxInput: (value: string) => void
}

export const DisplaySetting = ({minInput, maxInput}: DisplaySettingType) => {

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
                <input type='number'
                       placeholder='Введите число'
                       onChange={onChangeHandlerMin}
                />
                <p>Max</p>
                <input type='number'
                       placeholder='Введите число'
                       onChange={onChangeHandlerMax}
                />
            </div>

        </div>
    )
}
import React, {ChangeEvent} from "react";
import styles from "./DisplaySetting.module.css";

type DisplaySettingType = {

}

export const DisplaySetting = ({}:DisplaySettingType) => {

    const onChangeHandlerMin =(e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('minValue', e.currentTarget.value)
    }
    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) =>{
        localStorage.setItem('maxValue', e.currentTarget.value)
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
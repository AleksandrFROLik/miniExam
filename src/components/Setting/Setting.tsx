import React from "react";
import style from "./Setting.module.css";
import {DisplaySetting} from "./DisplaySetting/DisplaySetting";
import {Button} from "../Button/Button";
import styles from "../Counter.module.css";


type SettingType = {
    callBackHandlerForSet: () => void
    minInput: (min: number) => void
    maxInput: (max: number) => void
    startValue: number
    finishValue: number
    disabled: boolean
}

export const Setting = ({
                            callBackHandlerForSet,
                            minInput,
                            maxInput,
                            startValue,
                            finishValue,
                            disabled
                        }: SettingType) => {


    return (
        <div className={style.counterWrapper}>
            <DisplaySetting minInput={minInput}
                            maxInput={maxInput}
                            startValue={startValue}
                            finishValue={finishValue}
            />
            <div className={styles.button}>
                <Button callBack={callBackHandlerForSet}
                        name='Set'
                        disabled={disabled || startValue === finishValue || startValue >= finishValue || startValue < 0}
                />
            </div>

        </div>
    )
}
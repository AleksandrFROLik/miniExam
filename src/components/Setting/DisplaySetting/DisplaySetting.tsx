import React from "react";
import styles from "./DisplaySetting.module.css";
import {Input} from "../../Input/Input";

type DisplaySettingType = {
    minInput: (min: number) => void
    maxInput: (max: number) => void
    startValue: number
    finishValue: number

}

export const DisplaySetting: React.FC<DisplaySettingType> = ({minInput, maxInput, startValue, finishValue}: DisplaySettingType) => {

    const onChangeHandlerMax = (maxValue: number) => {
        maxInput(maxValue)
    }

    const onChangeHandlerMin = (minValue: number) => {
        minInput(minValue)
    }

    return (
        <div className={styles.display}>
            <div className={styles.inputItems}>
                <div
                    className={finishValue < 0 ||
                        (finishValue < 0 && startValue > finishValue) ||
                        (finishValue > 0 && startValue > finishValue)||
                        (startValue > 0 && finishValue > 0 && startValue === finishValue )
                        ? styles.inputMin : styles.noError}>
                    <Input
                        callBack={onChangeHandlerMax}
                        value={finishValue}
                        title='max value'
                    />
                </div>
                <div className={startValue < 0 ||
                        (finishValue > 0 && startValue > finishValue )||
                        (startValue > 0 && finishValue > 0 && startValue === finishValue)
                        ? styles.inputMin : styles.noError}>
                    <Input
                        callBack={onChangeHandlerMin}
                        value={startValue}
                        title='start value'
                    />
                </div>

            </div>
        </div>
    )
}




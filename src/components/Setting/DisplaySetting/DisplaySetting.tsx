import React from "react";
import styles from "./DisplaySetting.module.css";
import {Input} from "../../Input/Input";
import {mainValueType} from "../../../App";

type DisplaySettingType = {
    minInput: (min: number) => void
    maxInput: (max: number) => void
    mainValue: mainValueType

}

 export const DisplaySetting: React.FC<DisplaySettingType> = ({minInput, maxInput, mainValue}: DisplaySettingType) => {

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
                    className={mainValue.maxValue < 0 ||
                        (mainValue.maxValue < 0 && mainValue.minValue > mainValue.maxValue) ||
                        (mainValue.maxValue > 0 && mainValue.minValue > mainValue.maxValue)||
                        (mainValue.minValue > 0 && mainValue.maxValue > 0 && mainValue.minValue === mainValue.maxValue )
                        ? styles.inputMin : styles.noError}>
                    <Input
                        callBack={onChangeHandlerMax}
                        value={mainValue.maxValue}
                        title='max value'
                    />
                </div>
                <div className={mainValue.minValue < 0 ||
                        (mainValue.maxValue > 0 && mainValue.minValue > mainValue.maxValue )||
                        (mainValue.minValue > 0 && mainValue.maxValue > 0 && mainValue.minValue === mainValue.maxValue)
                        ? styles.inputMin : styles.noError}>
                    <Input
                        callBack={onChangeHandlerMin}
                        value={mainValue.minValue}
                        title='start value'
                    />
                </div>

            </div>
        </div>
    )
}




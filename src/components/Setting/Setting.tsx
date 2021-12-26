import React from "react";
import style from "./Setting.module.css";
import {DisplaySetting} from "./DisplaySetting/DisplaySetting";
import {Button} from "../Button/Button";
import styles from "../Counter.module.css";
import {useSelector} from "react-redux";
import {rootReducerType} from "../../bll/store";
import { mainValueType } from "../../bll/CounterReducer";


type SettingType = {
    callBackHandlerForSet: () => void
    minInput: (min: number) => void
    maxInput: (max: number) => void
}

export const Setting: React.FC<SettingType> = ({   callBackHandlerForSet,
                                                   minInput,
                                                   maxInput,
                                               }: SettingType) => {

    const disabled1 = useSelector<rootReducerType, boolean>(state => state.disabled.disabled)
    const mainValue = useSelector<rootReducerType, mainValueType>(state => state.counter.mainValue)

    return (
        <div className={style.counterWrapper}>
            <DisplaySetting minInput={minInput}
                            maxInput={maxInput}
            />

            <div className={styles.button}>
                <Button callBack={callBackHandlerForSet}
                        name='Set'
                        disabled={disabled1
                        || mainValue.minValue === mainValue.maxValue
                        || mainValue.minValue >= mainValue.maxValue
                        || mainValue.minValue < 0}
                />
            </div>

        </div>
    )
}
import React from "react";
import style from "./Setting.module.css";
import {DisplaySetting} from "./DisplaySetting/DisplaySetting";
import {Button} from "../Button/Button";
import styles from "../Counter.module.css";


type SettingType = {
    callBackHandlerForSet:()=>void
    minInput:(value:string)=>void
    maxInput:(value:string)=>void
    startValue: number
    finishValue:number
}

export  const Setting = ({callBackHandlerForSet, minInput, maxInput, startValue,finishValue}:SettingType) => {


    return(
        <div className={style.counterWrapper}>
            <DisplaySetting minInput={minInput}
                            maxInput={maxInput}
                            startValue={startValue}
                            finishValue={finishValue}
            />
            <div className={styles.button}>
                <Button  callBack={callBackHandlerForSet} name='Set' />
            </div>

        </div>
    )
}
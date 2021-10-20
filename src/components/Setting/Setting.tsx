import React from "react";
import style from "./Setting.module.css";
import {DisplaySetting} from "./DisplaySetting/DisplaySetting";
import {Button} from "../Button/Button";
import styles from "../Counter.module.css";


type SettingType = {
    callBackHandlerForSet:()=>void
}

export  const Setting = ({callBackHandlerForSet}:SettingType) => {

    return(
        <div className={style.counterWrapper}>
            <DisplaySetting
            />
            <div className={styles.button}>
                <Button  callBack={callBackHandlerForSet} name='Set' />
            </div>

        </div>
    )
}
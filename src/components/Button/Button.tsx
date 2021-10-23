import React from "react";
import styles from './Button.module.css'


type  propsTypeCounter = {
    callBack: () => void
    name: string
    disabled?: boolean
}

export const Button: React.FC<propsTypeCounter> = ({

                                                       name,
                                                       callBack,
                                                       disabled,
                                                       ...props
                                                   }: propsTypeCounter) => {

    const onClickHandler = () => {
        callBack()
    }
    return (
        <button onClick={onClickHandler} disabled={disabled}
                className={disabled ? styles.notActive : styles.buttonItem}>{name}</button>
    )
}
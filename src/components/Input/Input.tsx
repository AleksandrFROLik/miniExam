import React, {ChangeEvent} from "react";

type InputType = {
    callBack:(value: number)=>void
    value: any
    title:string

}

export const Input = ({ callBack, value,  title}:InputType) => {

    const callBackHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        callBack(+(e.currentTarget.value))
    }

    return (
        <>
            <p>{title}</p>
            <input
                value={value}
                type='number'
                onChange={callBackHandler}

            />
        </>
    )
}
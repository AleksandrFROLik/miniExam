
const InitialState = {
    disabled: false
}

export type InitialStateType = typeof InitialState

export const DisabledReducer = (state:InitialStateType=InitialState, action:DisabledActionType):InitialStateType=> {
    switch (action.type) {
        case "DISABLED": {
            return {disabled: action.isDone}
        }

    } return state
}


export type DisabledActionType = ReturnType<typeof disabledCounterAC>

export const disabledCounterAC = (isDone:boolean)=> {
    return{
        type: 'DISABLED',
        isDone
    } as const
}


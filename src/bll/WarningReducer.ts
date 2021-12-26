const InitialState = {
    warning: null
}

export type InitialStateType = {
    warning: string | null
}

export const WarningReducer = (state: InitialStateType = InitialState, action: WarningActionType): InitialStateType => {
    switch (action.type) {
        case "WARNING": {
            return {
                warning: action.isDone
            }
        }
        default:
            return state

    }

}


export type WarningActionType = ReturnType<typeof warningCounterAC>

export const warningCounterAC = (isDone: string | null) => {
    return {
        type: 'WARNING',
        isDone
    } as const
}


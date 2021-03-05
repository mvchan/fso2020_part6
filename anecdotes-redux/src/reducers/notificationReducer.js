const initialState = 'notification placeholder'

// createStore uses this as callback
// dispatch command will call this against the store
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON':
            state = action.message
            return state
        case 'OFF':
            state = ''
            return null
        default: 
            return null
    }
}

//this can be used as parameter for dispatch
export const enableNotification = (message) => {
    return {
        type: 'ON',
        message: message
    }
}

//this can be used as parameter for dispatch
export const disableNotification = () => {
    return {
        type: 'OFF'
    }
}

export default reducer
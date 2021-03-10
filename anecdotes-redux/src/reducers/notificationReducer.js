// createStore uses this as callback
// dispatch command will call this against the store
const reducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'ON':
            state = action.message
            return state
        case 'OFF':
            state = ''
            return null
        default: 
            return state
    }
}
/*
//this can be used as parameter for dispatch
export const enableNotification = (message) => {
    return {
        type: 'ON',
        message: message
    }
}
*/

//this can be used as parameter for dispatch
export const setNotification = (message, timer) => {
    return async dispatch => {
        await dispatch({
            type: 'ON',
            message: message
        })
        setTimeout(() => {dispatch(disableNotification())}, timer * 1000)
    }
}

//this can be used as parameter for dispatch
export const disableNotification = () => {
    return {
        type: 'OFF'
    }
}

export default reducer
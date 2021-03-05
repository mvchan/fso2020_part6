const initialState = ''

// createStore uses this as callback
// dispatch command will call this against the store
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET':
            state = action.text
            return state
        default:
            return state
    }
}

//this can be used as parameter for dispatch
export const setFilter = userFilter => (
    {
        type: 'SET',
        text: userFilter
    }
)

export default reducer
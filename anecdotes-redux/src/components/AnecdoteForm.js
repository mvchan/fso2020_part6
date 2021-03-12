import React from 'react'
//HOOK-API APPROACH FOR USING STORES
//import { useDispatch } from 'react-redux'
import { createEntry } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    //HOOK-API APPROACH FOR USING STORES
    //const dispatch = useDispatch()

    const addEntry = async (event) => {
        event.preventDefault()

        if (!event.target.anecdote.value)
            return
        
        const anecdoteText = event.target.anecdote.value
        event.target.anecdote.value = ''

        //dispatch(createEntry(anecdoteText))
        //dispatch(setNotification(`you created a new entry: '${anecdoteText}'`, 3))
        props.createEntry(anecdoteText)
        props.setNotification(`you created a new entry: '${anecdoteText}'`, 3)
    }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addEntry}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
        </>
    )
}

const mapDispatchToProps = dispatch => {  
    return {
        createEntry: value => {
            dispatch(createEntry(value))
        },
        setNotification: (message,timer) => {
            dispatch(setNotification(message,timer))
        }
    }
}

//first parameter is state, which can be null if unused
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
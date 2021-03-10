import React from 'react'
import { useDispatch } from 'react-redux'
import { createEntry } from '../reducers/anecdoteReducer'
import { enableNotification, disableNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addEntry = async (event) => {
        event.preventDefault()

        if (!event.target.anecdote.value)
            return
        
        const anecdoteText = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createEntry(anecdoteText))
        dispatch(enableNotification(`you created a new entry: '${anecdoteText}'`))
        setTimeout(() => {dispatch(disableNotification())}, 5000)
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

export default AnecdoteForm
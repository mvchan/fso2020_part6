import React from 'react'
import { useDispatch } from 'react-redux'
import { createEntry } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addEntry = (event) => {
        event.preventDefault()
        const anecdoteText = event.target.anecdote.value
        event.target.anecdote.value = ''
        return anecdoteText ? dispatch(createEntry(anecdoteText)) : null
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
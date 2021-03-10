import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { enableNotification, disableNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const userFilter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(increaseVote(anecdote))
        dispatch(enableNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => {dispatch(disableNotification())}, 5000)
    }

    return (
        <>
            {anecdotes
                .filter(a => a.content.includes(userFilter))
                .sort((a,b) => a.votes < b.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                    </div>
                )
            }
        </>
    )
}

export default AnecdoteList
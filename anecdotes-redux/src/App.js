import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createEntry, increaseVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVote(id))
  }

  const addEntry = (event) => {
    event.preventDefault()
    const anecdoteText = event.target.anecdote.value
    event.target.anecdote.value = ''
    return anecdoteText ? dispatch(createEntry(anecdoteText)) : null
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a,b) => a.votes < b.votes)
        .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addEntry}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
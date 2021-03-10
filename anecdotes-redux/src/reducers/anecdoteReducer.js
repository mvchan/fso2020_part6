import anecdoteService from '../services/anecdotes'

/* THESE ARE HELPER FUNCTIONS THAT SHOULD ONLY BE USED AS A SUBSTITUTE FOR A LACK OF A BACKEND

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)
*/

// createStore uses this as callback
// dispatch command will call this against the store
const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      state[state.findIndex(a => a.id === action.data.id)].votes++
      return state.concat()
    case 'CREATE':
      return state.concat({
        content: action.data.content,
        id: action.data.id,
        votes: action.data.votes
      })
    case 'INIT_ANECDOTES':
      return action.data
    default: 
      return state
  }
}

//redux-thunk allows inner function to receive dispatch and getState as parameters
//first parameter will be the dispatch method
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const increaseVote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateAnecdote({...anecdote, votes: anecdote.votes+1})
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export const createEntry = anecdoteText => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdoteText)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export default reducer
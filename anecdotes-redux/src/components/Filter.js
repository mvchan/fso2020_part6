import React from 'react'
//HOOK-API APPROACH FOR USING STORES
//import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
    //HOOK-API APPROACH FOR USING STORES
    //const dispatch = useDispatch()

    const handleChange = (event) => {
        console.log(event.target.value)
        //dispatch(setFilter((event.target.value)))
        props.setFilter(event.target.value)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const mapDispatchToProps = {  
    setFilter
}

//first parameter is state, which can be null if unused
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter
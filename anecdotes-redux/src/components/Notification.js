import React from 'react'
//HOOK-API APPROACH FOR USING STORES
//import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

const Notification = (props) => {
  //HOOK-API APPROACH FOR USING STORES
  //const notification = useSelector(state => state.notification)

  const notification = () => (
    props.notification ? props.notification : null
  )

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if (!notification())
    return null

  return (
    <div style={style}>
      {notification()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

//export default Notification
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
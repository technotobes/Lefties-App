
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'

function Menu(props) {

  return (
    <div>
        <div><NavLink to="/">Home</NavLink> </div>
        {!props.isAuthenticated ? <div><NavLink to="/register">Register</NavLink></div> : null}
        {!props.isAuthenticated ? <div><NavLink to="/login">Login</NavLink></div> : <div><Logout /></div>}
        {props.isAuthenticated ? <div><NavLink to="/add-listing">Add Listing</NavLink></div> : null}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authenticateRed.isAuthenticated
  }
}

export default connect(mapStateToProps)(Menu)
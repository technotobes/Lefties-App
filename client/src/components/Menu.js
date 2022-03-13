
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import '../css/Menu.css'
import Address from './Address'
import AddressDisplay from './AddressDisplay'
import { GiHamburgerMenu } from 'react-icons/gi'

function Menu(props) {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  return (
    <div className='navBar' id='main'>

      <div className='left-container'>
        <span onClick={() => openNav()}><GiHamburgerMenu size="1.3em"/></span>

        <div id="mySidenav" className='sidenav'>
          <a href="javascript:void(0)" className='closeBtn' onClick={() => closeNav()}>&times;</a>
          <NavLink to="/">Home</NavLink>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>


      <div className='middle-container'>
        <NavLink to="/">Lefties</NavLink>
      </div>

      <div className='right-container'>
        {!props.isAuthenticated ? <div className="registerBtn"><NavLink to="/register">Sign Up</NavLink></div> : <div className="addListingBtn"><NavLink to="/add-listing">Add Listing</NavLink></div>}
        {!props.isAuthenticated ? <div className="loginBtn"><NavLink to="/login">Sign In</NavLink></div> : <div className="logoutBtn"><NavLink to="/logout">Sign Out</NavLink></div>}
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authenticateRed.isAuthenticated,
    address: state.addressRed.address
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveAddress: (address) => dispatch(actionCreators.saveAddress(address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
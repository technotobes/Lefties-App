
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/Menu.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdShoppingCart } from 'react-icons/md'
import CartCountDisplay from './CartCountDisplay'
import CartList from './CartList'

function Menu(props) {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function openCart() {
    document.getElementById("mySidenav2").style.width = "400px";
  }

  function closeCart() {
    document.getElementById("mySidenav2").style.width = "0";
  }


  return (
    <div className='navBar' id='main'>

      <div className='left-container'>
        <div className="hamburger"><span onClick={() => openNav()}><GiHamburgerMenu size="1.3em"/></span></div>

        <div id="mySidenav" className='sidenav'>
          <a className='closeBtn' onClick={() => closeNav()}>&times;</a>
          <div className="navLinks">
            <NavLink to="/">Home</NavLink>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        
        {!props.isAuthenticated ? <div className='invisibleBox'></div> : <div className="addListingBtn"><NavLink to="/add-listing">Add Listing</NavLink></div>}
      </div>


      <div className='middle-container'>
        <NavLink to="/">Lefties</NavLink>
      </div>

      <div className='right-container'>
        <span className='shoppingCart' onClick={() => openCart()}><MdShoppingCart size="1.5em"/><CartCountDisplay /></span>
        {!props.isAuthenticated ? <div className="registerBtn"><NavLink to="/register">Sign Up</NavLink></div> : null}
        {!props.isAuthenticated ? <div className="loginBtn"><NavLink to="/login">Sign In</NavLink></div> : <div className="logoutBtn"><NavLink to="/logout">Sign Out</NavLink></div>}

        <div id="mySidenav2" className='sidenav2' >
          <a className='closeBtn' onClick={() => closeCart()}>&times;</a>
          <div className='cartListContainer'>
            <CartList />
          </div>
        </div>

      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authenticateRed.isAuthenticated,
  }
}


export default connect(mapStateToProps)(Menu)
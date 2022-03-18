
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/Menu.css'
import CartCountDisplay from './CartCountDisplay'
import CartList from './CartList'

// Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdShoppingCart, MdLogout, MdFastfood } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import lefties from '../images/leftiesLogo.png'

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
            <div className="navIcons">
              <FaHome size="2.2em"/>
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="navIcons">
              <MdFastfood size="2em"/>
              <NavLink to="/listings">Listings</NavLink>
            </div>
            <div className="navIcons">
              {!props.isAuthenticated ? <><CgProfile size="2.2em"/><div><NavLink to="/login">Sign In</NavLink></div></>: <><MdLogout size="2.2em"/><div><NavLink to="/logout">Sign Out</NavLink></div></>}
            </div>
          </div>
        </div>
        
        {!props.isAuthenticated ? <div className='invisibleBox'></div> : <div className="addListingBtn"><NavLink to="/add-listing">Add Listing</NavLink></div>}
      </div>


      <div className='middle-container'>
        <NavLink to="/"><img src={lefties}/></NavLink>
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
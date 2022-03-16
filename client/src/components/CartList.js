import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function CartList(props) {

    const cartItems = props.allCartItems.map((book, index)=> {
        return <li key={index}>{book.title}</li>
    })
    // console.log(props.allCartItems)

    function closeCart() {
        document.getElementById("mySidenav2").style.width = "0";
    }

    return (
        <div>
            <h1>Items in Cart</h1>
            {cartItems}
            <NavLink to="/payment" onClick={() => closeCart()}>Checkout</NavLink>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        allCartItems: state.cartRed.cart
    }
}

export default connect(mapStateToProps)(CartList)
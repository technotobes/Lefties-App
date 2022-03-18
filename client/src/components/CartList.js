import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as actionCreators from '../store/creators/actionCreators'
import '../css/Listing.css'


function CartList(props) {

    const cartItems = props.allCartItems.map((listing, index)=> {
        return <li className="mainCartListingContainer">
            <div className="cartListingContainer" key={index}>
                <div>{listing.title}</div>
                <div>$ {listing.price}</div>
            </div>
            <button className="deleteBtn" onClick={() => {props.onRemove(index)}}>Remove</button>
            </li>
    })
    // console.log(props.allCartItems)

    var total_amt = 0

    const total = props.allCartItems.map((cartItem) => (total_amt += cartItem.price))
    console.log(total_amt)
    console.log(props.cartTotal)
    function closeCart() {
        document.getElementById("mySidenav2").style.width = "0";
        props.onCheckout(total_amt)

    }

    return (
        <div className="mainCartContainer">
            <h1>Items in Cart</h1>
            <div className="cartItemsContainer">
                {cartItems}
            </div>
            <div className="checkout">
                Total: $ {total_amt}
                <NavLink to="/payment" className="checkoutBtn2" onClick={() => closeCart()}>Checkout</NavLink>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        allCartItems: state.cartRed.cart,
        cartTotal: state.cartRed.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckout: (value) => dispatch(actionCreators.checkout(value)),
        onRemove: (index) => dispatch(actionCreators.removeItem(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
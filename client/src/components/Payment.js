import React, {useState} from 'react'
import StripeContainer from './StripeContainer'
import { connect } from 'react-redux'
import "../css/Stripe.css"
import * as actionCreators from '../store/creators/actionCreators'


function Payment(props) {
    const [showItem, setShowItem] = useState(false)

    const cartItems = props.allCartItems.map((listing, index)=> {
        return <li className="mainOrderDetailsContainer">
            <div className="cartOrderContainer" key={index}>
                <div>{listing.title}</div>
                <div>$ {listing.price}</div>
            </div>
            </li>
    })

    return (

        <div className="mOContainer">
            {props.allCartItems ? 
                <div className="mOContainer2">
                <h1>Order Details</h1>
                {cartItems}
            </div>: null}
                

            <div className="checkoutBtn">
                {showItem ? <StripeContainer/> : <> <h3>Total: $ {props.cartTotal}</h3> <button onClick={() => setShowItem(true)}>Confirm</button></>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartTotal: state.cartRed.total,
        allCartItems: state.cartRed.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (index) => dispatch(actionCreators.removeItem(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
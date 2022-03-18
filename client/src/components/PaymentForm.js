import React, { useState, useEffect } from 'react'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import '../css/Stripe.css'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'

function PaymentForm(props) {
    const [success, setSuccess] =useState(false)
    const [quantity2, setQuantity] =useState("")
    const stripe = useStripe()
    const elements = useElements()

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": { color: "#fce883" },
                "::placeholder": { color: "#87bbfd" }
            },
            invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee"
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement)
        })

        if(!error) {
            try {
                const {id} = paymentMethod
                const amount = (100 * parseFloat(props.cartTotal))
                const response = await axios.post("http://localhost:8080/payment", {
                    amount: amount,
                    id
                })
                if(response.data.success) {
                    console.log("Succcessful Payment")
                    setSuccess(true)
                }
    
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        } 
    }


    // result changes, useEffect
    
    const fetchListingQuantity = (id) => {
        var result = props.listings.filter(listing => {
            return listing.id === id
        })

        return result[0].quantity
    }
    
    console.log(props.allCartItems)
    
    const updateDB = () => {
        for (let i=0;i<props.allCartItems.length; i++) {
            const id = props.allCartItems[i].id
            const quantity = fetchListingQuantity(id) - 1
            setQuantity(quantity)
            fetch(`http://localhost:8080/listing/update/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"quantity": `${quantity}`})
            }).then(() => {
                console.log("Success")
            })
        }
    }
    
    const handlePay = () => {
        updateDB()
        props.clearCart()
    }

    return (

        <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button onClick={() => handlePay()}>Pay</button>
        </form>
        :
        <div className="orderSuccess">
            <h2>Order Recieved!</h2>
        </div>    
        }
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        cartTotal: state.cartRed.total,
        allCartItems: state.cartRed.cart,
        listings: state.listingsRed.listings,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actionCreators.clearCart()),
        onFetchListings: () => dispatch(actionCreators.fetchListings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm)
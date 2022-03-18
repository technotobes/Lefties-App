import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY=process.env.REACT_APP_PUBLISHABLE_KEY

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
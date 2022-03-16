import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY="pk_test_51KdcLeIgTyqHFnggX055bvRDHvfvtEnIA9PeHOmD6tBdnMWk0KFhTZlo88gfjDNL2vbnK9UQCnlVaUBM0fOMbHmu00xj3bqzjy"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {
    return (

        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
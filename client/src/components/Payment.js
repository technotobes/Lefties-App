import React, {useState} from 'react'
import StripeContainer from './StripeContainer'


export default function Payment() {
    const [showItem, setShowItem] = useState(false)

    return (

        <div>
            <h1>Payment</h1>
            {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <button onClick={() => setShowItem(true)}>Purchase Spatula</button></>}
        </div>
    )
}
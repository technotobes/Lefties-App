import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'
import '../css/Listing.css'


function Search(props) {

    const [delivery, setDelivery] = useState(true)
    const [pickup, setPickup] = useState(true)


    return (
        <div>
            <div>
                {props.delivery ? <button className="btnOn" onClick={() => {setDelivery(!delivery); props.onToggleDelivery(delivery)}}>Delivery</button>:<button className="btnOff" onClick={() => {setDelivery(!delivery); props.onToggleDelivery(delivery)}}>Delivery</button> }
                {props.pickup ? <button className="btnOn" onClick={() => {setPickup(!pickup); props.onTogglePickup(pickup)}}>Pick up</button>:<button className="btnOff" onClick={() => {setPickup(!pickup); props.onTogglePickup(pickup)}}>Pick up</button>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        address: state.addressRed.address,
        delivery: state.filterRed.delivery,
        pickup: state.filterRed.pickup,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleDelivery: (value) => dispatch(actionCreators.toggleDelivery(value)),
        onTogglePickup: (value) => dispatch(actionCreators.togglePickup(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
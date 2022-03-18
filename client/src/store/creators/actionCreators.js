import * as actionTypes from '../actions/actionTypes'

export const fetchListings = () => {
    return (dispatch) => {
        fetch('https://lefties.herokuapp.com/listings')
        .then(response => response.json())
        .then(listings => {
          dispatch({type: actionTypes.LISTINGS_LOADED, payload: listings})
        })
    }
}

export const fetchGeolocation = (location) => {
    return (dispatch) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDLGK5HZ52V33C4nbX8kXQ-IIveo_A0QpM&address=${location}`)
        .then(response => response.json())
        .then(function(response){
            const lat = response.results[0].geometry.location.lat;
            const lng = response.results[0].geometry.location.lng;
            dispatch({type: actionTypes.SET_LATITUDE, payload: lat})
            dispatch({type: actionTypes.SET_LONGITUDE, payload: lng})
        })
    }
}



export const login = (token) => {
    return {
        type: actionTypes.LOG_IN,
        payload: token
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOG_OUT,
        payload: null
    }
}

export const saveAddress = (address) => {
    return {
        type: actionTypes.SET_ADDRESS,
        payload: address
    }
}


export const addToCart = (listing) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: listing
    }
}

export const checkout = (value) => {
    return {
        type: actionTypes.CHECKOUT,
        payload: value
    }
}

export const toggleDelivery = (value) => {
    return {
        type: actionTypes.SET_DELIVERY,
        payload: value
    }
}

export const togglePickup = (value) => {
    return {
        type: actionTypes.SET_PICKUP,
        payload: value
    }
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART,
        payload: null
    }
}

export const removeItem = (index) => {
    return {
        type: actionTypes.REMOVE_ITEM,
        payload: index
    }
}
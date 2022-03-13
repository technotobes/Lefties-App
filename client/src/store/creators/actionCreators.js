import * as actionTypes from '../actions/actionTypes'

export const fetchListings = () => {
    return (dispatch) => {
        fetch('http://localhost:8080/listings')
        .then(response => response.json())
        .then(listings => {
          dispatch({type: actionTypes.LISTINGS_LOADED, payload: listings})
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
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    address: "",
    latitude:"",
    longitude:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case actionTypes.SET_LATITUDE:
            return {
                ...state,
                latitude: action.payload
            }
        case actionTypes.SET_LONGITUDE:
            return {
                ...state,
                longitude: action.payload
            }   
        default:
            return state
    }
}

export default reducer
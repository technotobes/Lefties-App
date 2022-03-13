import * as actionTypes from '../actions/actionTypes'

const initialState = {
    address: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        default:
            return state
    }
}

export default reducer
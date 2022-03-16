import * as actionTypes from '../actions/actionTypes'

const initialState = {
    delivery: false,
    pickup: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_DELIVERY:
            return {
                ...state,
                delivery: action.payload
            }
            case actionTypes.SET_PICKUP:
                return {
                    ...state,
                    pickup: action.payload
                }
        default:
            return state
    }
}

export default reducer
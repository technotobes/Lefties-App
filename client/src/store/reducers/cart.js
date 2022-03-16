import * as actionTypes from '../actions/actionTypes'

const initialState = {
    cart: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}

export default reducer
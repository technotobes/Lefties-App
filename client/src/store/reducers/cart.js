import * as actionTypes from '../actions/actionTypes'

const initialState = {
    cart: [],
    total: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case actionTypes.CHECKOUT:
            return {
                ...state,
                total: action.payload
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, action.payload),
                    ...state.cart.slice(action.payload + 1)
                ]
            }     
        default:
            return state
    }
}

export default reducer
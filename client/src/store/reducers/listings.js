import * as actionTypes from '../actions/actionTypes'

const initialState = {
    listings: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LISTINGS_LOADED:
            return {
                ...state,
                listings: action.payload
            }
        // case actionTypes.FILTERED_listings_LOADED:
        //     return {
        //         ...state,
        //         listings: action.payload
        //     }

        default:
            return state
    }
}

export default reducer
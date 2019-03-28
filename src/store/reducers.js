import { TYPES } from './actions'

const initialState = {
    title: 'Search for ...'
};

function rootReducer(state = initialState, action) {
    if (action.type === TYPES.SEARCH) {
        console.log(action.payload)
        return Object.assign({}, state, { title: action.payload })
    }
    return state;
}

export default rootReducer;
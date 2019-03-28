import { TYPES } from './actions'

const initialState = {
    title: 'Search for ...'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SEARCH:
            return Object.assign({}, state, { title: action.payload })
        default:
            return state
    }
}
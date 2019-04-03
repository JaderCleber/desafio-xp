import { TYPES } from './actions'

const initialState = {
    recent: [],
    played: [],
    results: [],
    searchText: '',
    tracks: [],
    album: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SEARCH:
            return Object.assign({}, state, { searchText: action.payload })
        case TYPES.OPEN_ALBUM:
            return {
                ...state,
                recent: [...state.recent, action.payload],
                album: action.payload
            }
        case TYPES.PLAY:
            return Object.assign({}, state, {
                played: [...state.played, action.payload]
            })
        case TYPES.SET_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            };

        case TYPES.SEARCH_SUCCESS:
            return {
                ...state,
                results: action.payload
            };
        case TYPES.OPEN_ALBUM_SUCCESS:
            return {
                ...state,
                tracks: action.payload
            };
        default:
            return state
    }
}
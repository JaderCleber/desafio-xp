import { TYPES } from './actions'

const initialState = {
    recent: [{
        album: 'Album 1',
        artist: 'Artist 1',
        image: 'image.png'
      },
      {
        album: 'Album 2',
        artist: 'Artist 2',
        image: 'image2.png'
      }],
    played: [{
        album: 'Album 1',
        artist: 'Artist 1',
        image: 'image.png'
      },
      {
        album: 'Album 2',
        artist: 'Artist 2',
        image: 'image2.png'
      }],
    results: [],
    searchText: '',
    tracks: [],
    album: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SEARCH:
            return Object.assign({}, state, { searchText: action.payload })
        case TYPES.GET_RESULTS:
            return Object.assign({}, state, {
                results: action.payload,
                recent: [...state.recent, actions.payload]
            })
        case TYPES.PLAY:
            return Object.assign({}, state, {
                played: [...state.played, actions.payload]
            })
        default:
            return state
    }
}
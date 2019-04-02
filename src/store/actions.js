
export const TYPES = {
    SEARCH: "SEARCH",
    GET_RESULTS: "GET_RESULTS",
    PLAY: "PLAY",
}

export const actions = {
    search: (value) => ({ type: TYPES.SEARCH, payload: value }),
    getResults: () => ({ type: TYPES.GET_RESULTS, payload: value }),
}
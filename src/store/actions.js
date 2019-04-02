
export const TYPES = {
    SEARCH: "SEARCH",
    GET_RESULTS: "GET_RESULTS",
    PLAY: "PLAY",
}

export const actions = {
    search: (value) => {
        // const recent = JSON.parse(localStorage.getItem('recent') || '');
        // const newRecent = results.concat(recent).unique().slice(10);
        // localStorage.setItem('recent', JSON.stringify(newRecent));
        return { type: TYPES.SEARCH, payload: value }
    },
    getResults: (results) => {
        // const recent = JSON.parse(localStorage.getItem('recent') || '');
        // const newRecent = results.concat(recent).unique().slice(10);
        // localStorage.setItem('recent', JSON.stringify(newRecent));
        return { type: TYPES.GET_RESULTS, payload: results }
    },
}
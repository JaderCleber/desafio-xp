
export const TYPES = {
    SEARCH: "SEARCH",
    OPEN_ALBUM: "OPEN_ALBUM",
    PLAY: "PLAY",
    SET_TOKEN: "SET_TOKEN",
    SEARCH_SUCCESS: "SEARCH_SUCCESS",
    OPEN_ALBUM_SUCCESS: "OPEN_ALBUM_SUCCESS",
}

export const search = (searchTerm) => {
    return (dispatch, getState) => {
        const request = new Request(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album`, {
            headers: new Headers({
                'Authorization': 'Bearer ' + getState().accessToken,
                'Accept': 'application/json'
            })
        });

        fetch(request).then(res => {
            return res.json();
        }).then(res => {
            dispatch({ type: TYPES.SEARCH_SUCCESS, payload: res.albums.items })
        }).catch(err => {
            // dispatch(err);
        });
        dispatch({ type: TYPES.SEARCH, payload: searchTerm })
    };
}

export const openAlbum = (album) => {
    return (dispatch, getState) => {
        const request = new Request(album.href, {
            headers: new Headers({
                'Authorization': 'Bearer ' + getState().accessToken,
                'Accept': 'application/json'
            })
        });

        fetch(request).then(res => {
            return res.json();
        }).then(res => {
            dispatch({ type: TYPES.OPEN_ALBUM_SUCCESS, payload: res.tracks.items })
        }).catch(err => {
            // dispatch(err);
        });
        dispatch({ type: TYPES.OPEN_ALBUM, payload: album })
    }
}

export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    };
};

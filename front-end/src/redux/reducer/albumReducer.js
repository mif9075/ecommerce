import { CREATE_ALBUM, ERROR_CREATE_ALBUM, GET_ALL_USER_ALBUMS } from '../actionTypes';

const initialState = {
    album: null,
    message: null,
    albums: [],
    userAlbums: []
}

export default function(state = initialState, action) {
    switch (action.type) {

    case GET_ALL_USER_ALBUMS:
        return {
        ...state,
        userAlbums: [...action.payload]
                }
        
    case CREATE_ALBUM: 
        let newAlbumsArray = [...state.albums,
            action.payload];
            return {
            ...state,
            albums: newAlbumsArray
                }

     case ERROR_CREATE_ALBUM:
        return {
            ...state,
            message: action.payload
                        }

    default: 
        return state;

    }
}
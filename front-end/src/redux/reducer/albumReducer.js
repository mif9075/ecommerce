import { CREATE_ALBUM, ERROR_CREATE_ALBUM, GET_ALL_USER_ALBUMS, GET_ALBUMS_BY_ID, DELETE_USER_ALBUMS_BY_ID, GET_ALL_ALBUMS } from '../actionTypes';

const initialState = {
    album: null,
    message: null,
    albums: [],
    userAlbums: []
}

export default function(state = initialState, action) {
    switch (action.type) {

    case DELETE_USER_ALBUMS_BY_ID: 
        let newUserAlbumArray = state.userAlbums.filter(album => album._id !== action.id)
        return {
            ...state,
            userAlbums: newUserAlbumArray
        }

    case GET_ALL_USER_ALBUMS:
        return {
        ...state,
        userAlbums: [...action.payload]
                }
    
    case GET_ALL_ALBUMS:
        return {
            ...state,
            albums: [...action.payload]
        }
    
    case GET_ALBUMS_BY_ID: 
        return {
            ...state,
            albums: [...action.payload]
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
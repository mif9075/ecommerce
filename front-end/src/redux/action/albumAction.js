import { CREATE_ALBUM, ERROR_CREATE_ALBUM, GET_ALL_USER_ALBUMS} from '../actionTypes/index';

import Axios from '../../lib/Axios';

export const getAllUserAlbums = (id) => async dispatch => {
    try {
        let foundAllUserAlbums = await Axios.get(`/album/get-all-user-albums/${id}`)
        console.log(foundAllUserAlbums)

        dispatch({
            type: GET_ALL_USER_ALBUMS,
            payload: foundAllUserAlbums.data
        })
        // console.log(foundAllUserAlbums)
        return Promise.resolve(foundAllUserAlbums.data);
        
    } catch(error) {
        console.log(error)
        dispatch(errorCreateAlbum(error))
        return Promise.reject(error)
    }
}

export const createAlbum = (albumInfo) => async dispatch => {

    let cloudiObj = {
        id: albumInfo.id,
        title: albumInfo.title,
    }

    try {
        
        let success = await Axios.post('/album/create-album', cloudiObj)
        console.log(success)
        dispatch(successCreateAlbum(success.data));

        return Promise.resolve(success);
    } catch (error) {
        console.log(error)
        dispatch(errorCreateAlbum(error))
        return Promise.reject(error);
    }
}

const successCreateAlbum = (createdAlbum) => dispatch => {
    dispatch({
        type: CREATE_ALBUM,
        payload: createdAlbum
    })
}

const errorCreateAlbum = (message) => dispatch => {
    dispatch({
        type: ERROR_CREATE_ALBUM,
        payload: message
    })
}


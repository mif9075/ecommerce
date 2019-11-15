import { CREATE_ALBUM, ERROR_CREATE_ALBUM, GET_ALL_USER_ALBUMS, GET_ALL_ALBUMS, GET_ALBUMS_BY_ID, DELETE_USER_ALBUMS_BY_ID } from '../actionTypes/index';

import Axios from '../../lib/Axios';

export const deleteUserAlbumByID = (id) => async dispatch => {
    try {
        let deletedByID = await Axios.delete(`/album/delete-by-id/${id}`);

        dispatch({
            type: DELETE_USER_ALBUMS_BY_ID,
            payload: deletedByID,
            id
        })
    } catch (error) {
        console.log(error)
        dispatch(errorCreateAlbum(error))
        return Promise.reject(error);
    }
}

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

export const getAllAlbums = () => async dispatch => {

    try {

        let success = await Axios.get(`/album/get-all-albums`)

        dispatch({
            type: GET_ALL_ALBUMS,
            payload: success.data
        })
        return Promise.resolve(success.data)
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

export const getAlbumByID = (id) => async dispatch => {

    try {

        let foundAlbum = await Axios.get(`/album/get-album-by-id/${id}`)

        dispatch({
            type: GET_ALBUMS_BY_ID,
            payload: foundAlbum.data
        });

        return Promise.resolve(foundAlbum.data)
    } catch (error) {
        dispatch(errorCreateAlbum(error));
        return Promise.reject(error);
    }
}


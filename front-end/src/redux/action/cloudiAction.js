import { CREATE_CLOUDI, ERROR_CREATE_CLOUDI, GET_CLOUDI_BY_ID, GET_ALL_USER_CLOUDIS, DELETE_USER_CLOUDI_BY_ID} from '../actionTypes/index';
import Axios from '../../lib/Axios';

export const handleUserCloudiByID = (id) => async dispatch => {
    try{

    let deletedByID = await Axios.delete(`/cloudi/delete-by-id/${id}`);

    dispatch({
        type: DELETE_USER_CLOUDI_BY_ID,
        payload: deletedByID,
        id
    }) 

    } catch (error) {
        console.log(error)
        dispatch(errorCreateCloudi(error))
        return Promise.reject(error);
    }
}

export const getAllUserCloudis = (id) => async dispatch => {
    
    try {
        let foundAllUserCloudis = await Axios.get(`/cloudi/get-all-user-cloudis/${id}`)
        
        dispatch({
            type: GET_ALL_USER_CLOUDIS,
            payload: foundAllUserCloudis.data
        })
        return Promise.resolve(foundAllUserCloudis.data);
    } catch (error) {
        console.log(error)
        dispatch(errorCreateCloudi(error))
        return Promise.reject(error)
    }
}

export const createCloudi = (cloudiInfo) => async dispatch => {

    let cloudiObj = {
        id: cloudiInfo.id,
        title: cloudiInfo.title,
        image: cloudiInfo.image,
    }

    try {
        
        let success = await Axios.post('/cloudi/create-cloudi', cloudiObj)
        console.log(success)
        dispatch(successCreateCloudi(success.data));

        return Promise.resolve(success);
    } catch (error) {
        console.log(error)
        dispatch(errorCreateCloudi(error))
        return Promise.reject(error);
    }
}

const successCreateCloudi = (createdCloudi) => dispatch => {
    dispatch({
        type: CREATE_CLOUDI,
        payload: createdCloudi
    })
}

const errorCreateCloudi = (message) => dispatch => {
    dispatch({
        type: ERROR_CREATE_CLOUDI,
        payload: message
    })
}

export const getCloudiByID = (id) => async dispatch => {

    try {
        let foundCloudi = await Axios.get(`/cloudi/get-cloudi-by-id/${id}`)

        dispatch({
            type: GET_CLOUDI_BY_ID,
            payload: foundCloudi.data
        });

        return Promise.resolve(foundCloudi.data)

    } catch (error) {
     dispatch(errorCreateCloudi(error));
     return Promise.reject(error)
 }

}
 
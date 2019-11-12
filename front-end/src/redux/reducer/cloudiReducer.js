import { CREATE_CLOUDI, ERROR_CREATE_CLOUDI,  GET_CLOUDI_BY_ID, GET_ALL_USER_CLOUDIS, DELETE_USER_CLOUDI_BY_ID } from '../actionTypes';


const initialState = {
   cloudis: [],
   message: null,
   cloudi: null,
   userCloudis: []
 };

export default function(state = initialState, action) {
  switch (action.type) {

    case DELETE_USER_CLOUDI_BY_ID: 
      let newUserCloudiArray = state.userCloudis.filter(cloudi => cloudi._id !== action.id)
      return {
        ...state, 
        userCloudis: newUserCloudiArray
      }

    case GET_ALL_USER_CLOUDIS:
      return {
        ...state, 
        userCloudis: [...action.payload]
      }


    case CREATE_CLOUDI:
      let newCloudisArray = [...state.cloudis, action.payload];
      return {
       ...state,
        cloudis: newCloudisArray
      };

    case GET_CLOUDI_BY_ID: 
    
      return {
        ...state, 
        cloudi: action.payload
      }  
    case ERROR_CREATE_CLOUDI:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
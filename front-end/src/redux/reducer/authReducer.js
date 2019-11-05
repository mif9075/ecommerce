import { AUTH_USER_SUCCESSFUL, AUTH_USER_LOGOUT} from '../actionTypes';
import { jwtDecodeTokenAndSetUser } from './authReducerHelpers'

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER_SUCCESSFUL: 
            return jwtDecodeTokenAndSetUser(state, action.payload)
        case AUTH_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: {}
            }
        default: 
            return state;
    }
}
import jwtDecode from 'jwt-decode';

const stateHelperFunc = (oldState, newState) => {
    return {
        ...oldState,
        ...newState
    }
}

export const jwtDecodeTokenAndSetUser = (oldState, token) => {
    let decodedToken = jwtDecode(token);
    return stateHelperFunc(oldState,{
        isAuthenticated: true,
        user: {
            email: decodedToken.email,
            username: decodedToken.username,
            id: decodedToken.id
        }
    })
}
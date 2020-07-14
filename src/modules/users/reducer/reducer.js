import {GET_USERS_BY_ID, GET_USERS_BY_ID_SUCCESS, GET_USERS_BY_ID_FAILURE} from '../actions/actions'

const initialState = {
    usersById :[]
}

const reducerUsers = (state= initialState, action) => {
    switch (action.type){
        case GET_USERS_BY_ID_SUCCESS:
            return {
                ...state, 
                usersById: action.payload}
        default:
            return state
    }

};

export default reducerUsers

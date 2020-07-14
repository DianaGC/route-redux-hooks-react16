import {getUsersByIdService} from '../../../service/service';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/';

export const GET_USERS_BY_ID = 'GET_USERS_BY_ID';
export const GET_USERS_BY_ID_SUCCESS = 'GET_USERS_BY_ID_SUCCESS';
export const GET_USERS_BY_ID_FAILURE = 'GET_USERS_BY_ID_FAILURE';

export const getUsersById = () => ({
    type: GET_USERS_BY_ID
});

export const getUserByIdSuccess = (users) => ({
    type: GET_USERS_BY_ID_SUCCESS,
    payload: users
});

export const getUserByIdFailure = () => ({
    type: GET_USERS_BY_ID_FAILURE
});

export const fetchUsersById = (id) => {
    return async (dispatch) => {
        dispatch(getUsersById());
        axios.get(url+'posts?userId='+id)
        .then(res => dispatch(getUserByIdSuccess(res.data)))
        .catch(err => dispatch(getUserByIdFailure()))
        
    }
}

import axios from "axios"
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS ,FETCH_USERS_FAILURE } from "./userType"

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetch_users_request())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetch_users_success(users))
        })
        .catch(error => {
            dispatch(fetch_users_failure(error.message))
        })
    }
}


export const fetch_users_request  = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

export const fetch_users_success = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetch_users_failure  = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}


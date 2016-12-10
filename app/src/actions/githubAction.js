import 'whatwg-fetch';
import {
    CHANGE_USER_ID,
    GET_GITHUB_SUCCESS
} from '../constants/actionTypes';

export const getGithub = (userId) => (
    (dispatch) => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then((json) => {
                dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } })
            })
    }
)

export const changeUserId = (userId) => ({
    type: CHANGE_USER_ID,
    payload: {
        userId
    }
});
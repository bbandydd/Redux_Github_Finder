import 'whatwg-fetch';
import {
    CHANGE_USER_ID
} from '../constants/actionTypes';

export const changeUserId = (userId) => ({
    type: CHANGE_USER_ID,
    payload: {
        userId
    }
});
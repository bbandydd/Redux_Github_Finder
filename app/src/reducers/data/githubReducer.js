import { handleActions } from 'redux-actions';
import { GithubState } from '../../constants/models';

const githubReducer = handleActions({
    GET_GITHUB_SUCCESS: (state, { payload}) => (
        state.merge({
            data: payload.data
        })
    ),
    CHANGE_USER_ID: (state, { payload }) => (
        state.merge({
            userId: payload.userId
        })
    ),
    GET_GITHUB_FAIL: () => {
        debugger
    }
}, GithubState);

export default githubReducer;
import { handleActions } from 'redux-actions';
import { GithubState } from '../../constants/models';

const githubReducer = handleActions({
    CHANGE_USER_ID: (state, { payload }) => (
        state.merge({
            userId: payload.userId
        })
    )
}, GithubState);

export default githubReducer;
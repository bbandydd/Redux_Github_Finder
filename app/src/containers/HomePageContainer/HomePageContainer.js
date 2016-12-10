import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

import { changeUserId, getGithub } from '../../actions';

const mapStateToProps = (state) => ({
    userId: state.github.getIn(['userId']),
    data: state.github.getIn(['data'])
});

const mapDispatchToProps = (dispatch) => ({
    onChangeUserId: (event) => {
        dispatch(changeUserId(event.target.value));
    },
    onSubmitUserId: (userId) => {
        dispatch(getGithub(userId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
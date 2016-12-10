import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

import { changeUserId } from '../../actions';

const mapStateToProps = (state) => ({
    userId: state.github.getIn(['userId'])
});

const mapDispatchToProps = (dispatch) => ({
    onChangeUserId: (event) => {
        dispatch(changeUserId(event.target.value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
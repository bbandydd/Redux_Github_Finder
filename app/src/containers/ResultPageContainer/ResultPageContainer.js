import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage';

const mapStateToProps = (state) => ({
    data: state.github.getIn(['data'])
})

export default connect(mapStateToProps)(ResultPage);
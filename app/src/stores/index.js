import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import github from '../reducers/data/githubReducer';

const Reducers = combineReducers({
    github
});

export default applyMiddleware(thunk)(createStore)(Reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);

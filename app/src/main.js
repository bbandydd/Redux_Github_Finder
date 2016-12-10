import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './stores/index'

import Main from './components/Main';
import ResultPageContainer from './containers/ResultPageContainer';

injectTapEventPlugin();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <Route path="/result" component={ResultPageContainer} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
)
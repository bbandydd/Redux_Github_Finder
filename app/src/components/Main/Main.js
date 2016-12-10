import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import HomePageContainer from '../../containers/HomePageContainer';

class Main extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Github Finder"
                    showMenuIconButton={false}
                >
                    <HomePageContainer />
                </AppBar>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;
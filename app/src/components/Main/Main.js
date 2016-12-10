import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Main extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Github Finder"
                    showMenuIconButton={false}
                />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;
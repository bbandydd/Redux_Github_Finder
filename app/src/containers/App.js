import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


class App extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                App {this.props.github.name}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        github: state.github
    }
}

function mapDispatchToProps(dispatch) {
    
}

export default connect(mapStateToProps)(App)

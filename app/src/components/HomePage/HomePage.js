import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const HomePage = () => (
    <div>
        <TextField  
            hintText="Please Key in your Github User Id."
        />
        <Link
            to={{
                pathname: 'result'
            }}
        >
            <RaisedButton label="Submit" />
        </Link>
    </div>
)

export default HomePage;
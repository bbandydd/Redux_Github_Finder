import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const ResultPage = (props) => (
    <div>
        <Card>
            <CardHeader
                title={props.data.get('name')}
                subtitle={props.userId}
                avatar={props.data.get('avatar_url')}
            />
            <CardText>
                Github : <a target="_blank" href={props.data.get('html_url')}>{props.data.get('html_url')}</a>
            </CardText>
            <CardText>
                Followers : {props.data.get('followers')}
            </CardText>
            <CardText>
                Following : {props.data.get('following')}
            </CardText>
            <CardActions>
                <Link to="/">
                <RaisedButton
                    label="Back"
                    icon={<ActionHome />}
                    secondary
                />
                </Link>
            </CardActions>
        </Card>
    </div>
)

export default ResultPage;
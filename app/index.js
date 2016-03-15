import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Routes from './config/routes'

const USER_DATA = {
    username: 'diegocardoso',
    name: 'Diego Cardoso',
    image: 'https://avatars3.githubusercontent.com/u/262432'
};

const ProfilePic = (props) => {
    return (
        <img src={props.imageUrl} style={{height: 100, width: 100}}/>
    )
};

const ProfileLink = (props) => {
    return (
        <div>
            <a href={`https://www.github.com/${props.username}`}>
                {props.username}
            </a>
        </div>        
    )
};

const ProfileName = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    )
};

const Avatar = (props) => {
    return (
        <div>
            <ProfilePic imageUrl={props.user.image} />
            <ProfileName name={props.user.name}/>
            <ProfileLink username={props.user.username} />
        </div>
    )
}

const App = React.createClass({
    render() {
        return( 
            <Avatar user={USER_DATA} />            
        );
    }    
});

ReactDOM.render((
    Routes
), document.getElementById('app'))
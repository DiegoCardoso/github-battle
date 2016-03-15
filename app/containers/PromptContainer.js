import React from 'react'
import Prompt from '../components/Prompt'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired    
    },

    getInitialState() {
        return {
            username: ''
        }
    },

    handleUpdateUser(e) {
        const username = e.target.value;
        this.setState({
            username
        })
    },

    handleSubmitUser(e) {
        e.preventDefault();
        const {username} = this.state;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            this.context.router.push({
               pathname: '/battle',
               query: {
                   playerOne: this.props.routeParams.playerOne,
                   playerTwo: this.state.username
               } 
            });
        } else {
            this.context.router.push(`/playerTwo/${this.state.username}`);
        }
    },

    render() {
        return (
            <Prompt 
                onSubmitUser={this.handleSubmitUser}
                onUpdateUser={this.handleUpdateUser}
                header={this.props.route.header}
                username={this.state.username}/>
        )
    }
})
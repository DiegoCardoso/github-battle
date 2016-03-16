import React, {PropTypes} from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

const ResultsCotainer = React.createClass({
    playersInfo() {
        return this.props.location.state.playersInfo;
    },
    getInitialState() {
        return {
            isLoading: true,
            scores: []
        }    
    },
    
    componentDidMount() {
        githubHelpers.battle(this.playersInfo())
            .then((scores) => {
                console.log(scores);
                this.setState({
                    isLoading: false,
                    scores: scores
                });
            });
    },    
    
    render() {
        return (
            <Results 
                isLoading={this.state.isLoading} 
                scores={this.state.scores}
                playersInfo={this.playersInfo()}/>
        );
    }
});

export default ResultsCotainer;
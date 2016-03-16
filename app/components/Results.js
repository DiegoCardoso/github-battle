import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';

const StartOver = () => {
    return (
        <div className="col-sm-12" style={{"margin-top": 20}}>
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">
                    Start Over
                </button>
            </Link>
        </div>
    )
}

const Results = React.createClass({
    render() {
        const winnerIndex = this.props.scores[0] > this.props.scores[1] ? 0 : 1;
        const loserIndex = 1 - winnerIndex; // 1 - [0] = 1 ; 1 - [1] = 0
        
        if (this.props.isLoading) {
            return (
                <p>LOADING...</p>
            )
        }
        
        if (this.props.scores[0] === this.props.scores[1]) {
            return (
                <MainContainer>
                    <h1>It's a tie</h1>
                    <StartOver />                    
                </MainContainer>
            )
        }
        
        return (
            <MainContainer>
                <h1>Results</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Winner">
                        <UserDetails score={this.props.scores[winnerIndex]} info={this.props.playersInfo[winnerIndex]} />
                    </UserDetailsWrapper>
                    
                    <UserDetailsWrapper header="Loser">
                        <UserDetails score={this.props.scores[loserIndex]} info={this.props.playersInfo[loserIndex]} />
                    </UserDetailsWrapper>
                </div>
                <StartOver />
            </MainContainer>
        );
    }
});

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

export default Results;
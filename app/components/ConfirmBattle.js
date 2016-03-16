import React, {PropTypes} from 'react'
import {Link} from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';


const ConfirmBattle = (props) => {
    console.log(props.isLoading)
    return props.isLoading
        ? (<p>LOADING...</p>)
        : (<MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper
                    header='Player One'>
                    <UserDetails info={props.playersInfo[0]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper
                    header='Player Two'>
                    <UserDetails info={props.playersInfo[1]}/>                    
                </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12'>
                    <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>Initiate Battle!</button>
                </div>
                <div className='col-sm-12'>
                    <Link to='/playerOne'>
                        <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                </div>
            </div>
        </MainContainer>);
};

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}


export default ConfirmBattle; 
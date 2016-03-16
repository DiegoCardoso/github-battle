import React, {PropTypes} from 'react';

const puke = (obj) => <pre>{JSON.stringify(obj, 2, ' ')}</pre>

const Results = React.createClass({
    render() {
        return (
            <div>
                Results: {puke(this.props)}
            </div>
        );
    }
});

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

export default Results;
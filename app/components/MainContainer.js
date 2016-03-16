import React from 'react';

export default (props) => {
    return (
        <div className="jumbotron col-sm-12 text-center" style={{"background": "transparent"}}>
            {props.children}
        </div>
    )
}
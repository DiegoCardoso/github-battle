import React from 'react'

export default React.createClass({
    render() {
        return (
            <div className='main-container'>                
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
});
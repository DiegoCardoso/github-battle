import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = React.createClass({
    render() {
        return (
            <div>
                <Header heading="Github Battle" />
                Hello World!
            </div>
        )
    }
})

const Header = (props) => {
    return (
        <h1>{props.heading}</h1>
    )
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
import React, {PropTypes} from 'react';

const styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px'
    }
};

const Loading = React.createClass({
    propTypes() {
        return {
            text: PropTypes.string,
            speed: PropTypes.number
        };
    },
    getDefaultProps() {
        return {
            text: 'Loading',
            speed: 300
        };
    },
    getInitialState() {
        this.initialText = this.props.text;
        return {
            text: this.initialText
        }
    },
    componentDidMount() {
        const stopper = `${this.initialText}...`;
        
        this.interval = setInterval(() => {
           if(this.state.text === stopper) {
               this.setState({
                   text: this.initialText
               });
           } else {
               this.setState({
                  text: `${this.state.text}.` 
               });
           }
        }, this.props.speed);
    },
    
    componentWillUnmount() {
        clearInterval(this.interval);  
    },
    
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
        );
    }
});

export default Loading;
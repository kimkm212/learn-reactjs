import React from 'react';
import RandomNumber from './RandomNumber';

class RandomNumApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : Math.round(Math.random()*100)
        };
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue) {
        this.setState({
            value : randomValue
        });
    }

    render() {
        return(
            <RandomNumber number={this.state.value}
                          onUpdate={this.updateValue}/>
        );
    };
}

export default RandomNumApp;
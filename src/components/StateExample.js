import React from 'react';

class StateExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header : "해더 시작 스테이트"
            ,content: "콘텐트 시작 스테이트 "
        }
    }
    
    updateHeader(text) {
        this.setState({
            header : "해더가 바뀜" 
        });
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this.updateHeader.bind(this)}>갱신</button>
            </div>  
        );
    }
}

export default StateExample;
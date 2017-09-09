import React from 'react';

class ContactCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : ""
           ,phone : ""
        }
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick() {
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
             name : ""
            ,phone : ""
        });
    }

    render() {
        return(
            <div>
                <p>
                    <input type="text" name="name" value={this.state.name} placeholder="이름"
                            onChange={this.handleChange.bind(this)}/>
                    <input type="text" name="phone" value={this.state.phone} placeholder="전화번호"
                           onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>추가</button>
                </p>
            </div>
        );
    }
}

export default ContactCreator;
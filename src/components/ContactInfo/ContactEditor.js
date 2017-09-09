import React from 'react';

class ContactEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            phone : ''
        }
    }

    handleClick() {
        if(!this.props.isSelected){
            return;
        }

        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            name : nextProps.contact.name,
            phone : nextProps.contact.phone
        });
    }

    render() {
        return(
            <div>
                <p>
                    <input type="text"
                           name="name"
                           placeholder="name"
                           value={this.state.name}
                           onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                           name="phone"
                           placeholder="phone"
                           value={this.state.phone}
                           onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                        Edit
                    </button>
                </p>
            </div>
        );
    }
}

export default ContactEditor;
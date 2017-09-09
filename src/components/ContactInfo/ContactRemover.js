import React from 'react';

class ContactRemover extends React.Component {
    handelClick() {
        this.props.onRemove();
    }

    render() {
        return(
            <button onClick={this.handelClick.bind(this)}>
                선택대상 삭제
            </button>
        );
    }
}

export default ContactRemover;
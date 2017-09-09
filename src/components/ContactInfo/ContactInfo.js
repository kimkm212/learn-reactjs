import React from 'react';
import ContactCreator from "./ContactCreator";
import update from 'react-addons-update'
import ContactRemover from "./ContactRemover";
import ContactEditor from "./ContactEditor";

class ContactInfo extends React.Component {

    handleClick() {
        this.props.onSelect(this.props.contactKey);
    }

    shouldComponentUpdate(nextProps, nextState){
        return (JSON.stringify(nextProps) != JSON.stringify(this.props));
    }

    render() {
        console.log("rendered: " + this.props.name);
        let getStyle = isSelect => {
            if(!isSelect) return;
            let style = {
                fontWeight : "bold",
                backgroundColor : "#4efcd8"
            };

            return style;
        }

        return(
            <li style={getStyle(this.props.isSelected)}
                onClick={this.handleClick.bind(this)}>
                {this.props.name} {this.props.phone}
            </li>
        );
    }
}



class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData : [
                {name : "미니", phone : "010-9999-1234"}
                ,{name : "찌니", phone : "010-5752-1440"}
                ,{name : "히니", phone : "010-1222-1330"}
                ,{name : "john", phone : "010-2252-5455"}
            ],
            selectedKey : -1,
            selected:{
                name : "",
                phone: ""
            }
        }
    }

    _onSelect(key) {
        if(key==this.state.selectedKey) {
            console.log("key select cancelled");
            this.setState({
                selectedKey : -1,
                selected: {
                    name : "",
                    phone : ""
                }
            });
            return;
        }

        this.setState({
            selectedKey : key,
            selected : this.state.contactData[key]
        });
        console.log(key + "선택됨");
    }

    _isSelected(key){
        if(this.state.selectedKey == key){
            return true;
        }else{
            return false;
        }
    }


    _insertContact(name, phone) {
        let newState = update(this.state, {
            contactData: {
                $push : [{"name" : name, "phone" : phone}]
            }
        });
        this.setState(newState);
    }

    _removeContact(){
        if(this.state.selectedKey == -1){
            return;
        }

        if(confirm('삭제할래?')){
            this.setState({
                contactData : update(
                    this.state.contactData,
                    {
                        $splice : [[this.state.selectedKey, 1]]
                    }
                ),
                selectedKey : -1
            });
        }

    }

    _editContact(name, phone) {
        this.setState({
            contactData : update(
                this.state.contactData,
                {
                    [this.state.selectedKey] : {
                        name : {$set : name},
                        phone : {$set : phone}
                    }
                }
            ),
            selected : {
                name : name,
                phone : phone
            }
        });
    }

    render() {
        return(
            <div>
                <h1>전화번호</h1>
                <ul>
                    {this.state.contactData.map((contact, i) => {
                        return (
                            <ContactInfo
                                name={contact.name}
                                phone={contact.phone}
                                key={i}
                                contactKey={i}
                                isSelected={this._isSelected.bind(this)(i)}
                                onSelect={this._onSelect.bind(this)}
                            />
                        );
                    })}

                </ul>
                <ContactCreator onInsert={this._insertContact.bind(this)}/>
                <ContactRemover onRemove={this._removeContact.bind(this)}/>
                <ContactEditor onEdit={this._editContact.bind(this)}
                               isSelected={(this.state.selectedKey != -1)}
                               contact={this.state.selected}/>
            </div>
        );
    }
}

export default Contacts;
import React from 'react';
import Header from './Header/Header';
import Content from './Content/Content';
import RandomNumApp from './RandomNum/RandomNumApp';
import Contacts from "./ContactInfo/ContactInfo";
import Counter from "./Counter/Counter";

class App extends React.Component {

    render(){
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

App.defaultProps = {
     headerTitle : '기본 해더값'
    ,contentTitle : '기본 콘텐트 타이틀'
    ,contentBody : '기본 콘텐트 바디'
}

export default App;
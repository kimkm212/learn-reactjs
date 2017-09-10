import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { getRandomColor } from './utils';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import RandomNumApp from './components/RandomNum/RandomNumApp';
import Contacts from "./components/ContactInfo/ContactInfo";
import Counter from "./components/Counter/Counter";
import CounterListContainer from './containers/CounterListContainer'
import Buttons from "./components/Counter/Buttons";

class App extends React.Component {

    render(){
        const { onCreate, onRemove } = this.props;
        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer/>
            </div>
        );
    }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: () => dispatch(actions.remove())
});

// 리덕스에 연결을 시키고 내보낸다
export default connect(null, mapToDispatch)(App);

App.defaultProps = {
     headerTitle : '기본 해더값'
    ,contentTitle : '기본 콘텐트 타이틀'
    ,contentBody : '기본 콘텐트 바디'
}


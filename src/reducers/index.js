
import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';
import multiCounter from './MultiCounter';

const reducers = combineReducers({
    multiCounter : multiCounter
});

export default reducers;


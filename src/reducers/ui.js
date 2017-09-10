import * as types from "../actions/ActionTypes";

const initialState = {
    color : 'black'
}

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) {
        return {
            color : action.color
        }
    } else {
        return state;
    }
}
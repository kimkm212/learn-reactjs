import * as types from "../actions/ActionTypes";

const initialState = {
    number : 0,
    color : 'black'
};

export default function counter(state = initialState, action) {

    switch (action.type) {
        case types.INCREMENT :
            return {   ...state, number: state.number +1 };

        case types.DECREMENT :
            return {   ...state, number : state.number -1 };

        case types.SET_COLOR :
            return {   ...state, color : action.color };

        default :
            return state;
    }

}
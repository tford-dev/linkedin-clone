import {SET_USER} from "../actions/actionType";

const INITIAL_STATE = {
    user: null,
}

//State Updater
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_USER:
        return{
            ...state,
            user: action.user,
        };
        default: 
            return state;
    }
};

export default userReducer;
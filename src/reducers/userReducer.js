const INITIAL_STATE = {
    user: null,
}

//State Updater
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: 
            return state;
    }
};

export default userReducer;
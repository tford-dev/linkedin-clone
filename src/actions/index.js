import { createDispatchHook } from "react-redux";
import  {auth, provider} from "../firebase";
import {SET_USER} from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export const signInAPI = () => {
    return (dispatch) => {
        auth
            //Google auth pop up window
            .signInWithPopup(provider)

            .then((payload) => {
                //sends user info to app
                dispatch(setUser(payload.user));
            })
            .catch((error) => alert(error.message));
    }
}

export const getUserAuth = () =>{
    return (dispatch) => {
        auth.onAuthStateChanged(async (user)=> {
            if (user){
                dispatch(setUser(user));
            }
        });
    };
}
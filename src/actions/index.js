import { createDispatchHook } from "react-redux";
import  {auth, provider, storage} from "../firebase";
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

export const signOutAPI = () => {
    return(dispatch) => {
        auth
            .signOut()
            .then(()=> {
                dispatch(setUser(null));
            })
            .catch((error)=> {
                console.log(error.message);
            });
    };
}

export const postArticleAPI = (payload) => {
    return(dispatch) => {
        dispatch(setLoading(true));

        if(payload.image != ''){
            const upload = storage
                .ref(`images/${payload.image.name}`)
                .put(payload.image);
            upload.on('state-changed', (snapshot)=> {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            console.log(`Progress : ${progress}%`);
            if(snapshot.state === 'RUNNING') {
                console.log(`Progress: ${progress}%`);
            }
        }, error => console.log(error.code),
        async () => {
            const downloadURL = await upload.snapshot.ref.getDownloadURL();
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayname,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                },
                video: payload.video,
                sharedImg: downloadURL,
                comments: 0,
                description: payload.description,
            });
            dispatch(setLoading(false));
        });
    } else if(payload.video){
        db.collection('articles').add({
            actor: {
                description: payload.user.email,
                title: payload.user.displayname,
                date: payload.timestamp,
                image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: '',
            comments: 0,
            description: payload.description,
        });
        dispatch(setLoading(false));
    }
};
}
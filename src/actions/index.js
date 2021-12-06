import  {auth, provider, storage} from "../firebase";
import  { db } from "../firebase";
import {SET_USER, SET_LOADING_STATUS, GET_ARTICLES} from "./actionType";

//Sets user in app
export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

//Function for if an article is loading in Main.js
export const setLoading = (status) => ({
    type: SET_LOADING_STATUS,
    status: status,
});

//Function to retrieve articles
export const getArticles = (payload) => ({
    type: GET_ARTICLES,
    payload: payload,
});

//Function for Google auth in app
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

//Function to sign user in if they are authenticated
export const getUserAuth = () =>{
    return (dispatch) => {
        //Function listens to see if the user in state has changed
        auth.onAuthStateChanged(async (user)=> {
            if (user){
                //Logs user in
                dispatch(setUser(user));
            }
        });
    };
}

//Function to sign user out
export const signOutAPI = () => {
    return(dispatch) => {
        auth
            //Firebase method to sign user out
            .signOut()
            .then(()=> {
                //Empties user from state
                dispatch(setUser(null));
            })
            .catch((error)=> {
                console.log(error.message);
            });
    };
}

//Function/handler for posting media to Main.js
export const postArticleAPI = (payload) => {
    return(dispatch) => {
        //When true, this allows a loading GIF to appear in Main.js
        dispatch(setLoading(true));
        if(payload.image !== ''){
            const upload = storage
                .ref(`images/${payload.image.name}`)
                //sends image off
                .put(payload.image);
            upload.on('state-changed', (snapshot)=> {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //Logs % progress of image being sent to firebase in console
            console.log(`Progress : ${progress}%`);
            if(snapshot.state === 'RUNNING') {
                console.log(`Progress: ${progress}%`);
            }
        }, error => console.log(error.code),
        async () => {
            const downloadURL = await upload.snapshot.ref.getDownloadURL();
            //Schema for uploading image files
            db.collection("articles").add({
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
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
    //Schema for uploading videos
    } else if(payload.video){
        db.collection('articles').add({
            actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: '',
            comments: 0,
            description: payload.description,
        });
        //When setLoading() is set to false, loading GIF disappears from DOM in Main.js
        dispatch(setLoading(false));
    }
};
}

//Retrieves posts from firebase
export const getArticlesAPI = () =>{
    return (dispatch) => {
        let payload;
        //Grabs posts from firebase
        db.collection('articles')
            //orders by newest to oldest
            .orderBy("actor.date", "desc")
            .onSnapshot((snapshot)=> {
                payload = snapshot.docs.map((doc) => doc.data());
                dispatch(getArticles(payload));
            })
    }
}
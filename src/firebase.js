//Imports of functions from SDK in Firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrBwmgI6MYsUPa6i34ZgoGEUcGYY8wXLg",
  authDomain: "linkedin-clone-405ac.firebaseapp.com",
  projectId: "linkedin-clone-405ac",
  storageBucket: "linkedin-clone-405ac.appspot.com",
  messagingSenderId: "481339896023",
  appId: "1:481339896023:web:df4da3f2097df99e8a0092"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export {auth, provider, storage};
export { db };
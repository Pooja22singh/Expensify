import {firebase, googleAuthprovider } from "../firebase/firebase";
export const startLogin = () =>{
return () => {
    return firebase.auth().signInWithPopup(googleAuthprovider);
}
}
import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBjwxjdmv6ggz97FeE2mt6OUVphdbnW2QQ",
    authDomain: "unichat-aea5e.firebaseapp.com",
    projectId: "unichat-aea5e",
    storageBucket: "unichat-aea5e.appspot.com",
    messagingSenderId: "1004209912781",
    appId: "1:1004209912781:web:74c52b7b5d830b1e596284"
  }).auth();
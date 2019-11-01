import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBX5gNFD8mEgolyBb9uT84dGZdTq7nr6h8",
    authDomain: "crwn-db-5e0fa.firebaseapp.com",
    databaseURL: "https://crwn-db-5e0fa.firebaseio.com",
    projectId: "crwn-db-5e0fa",
    storageBucket: "crwn-db-5e0fa.appspot.com",
    messagingSenderId: "424417342647",
    appId: "1:424417342647:web:76a510d8bf70299be7c932",
    measurementId: "G-ZYZN4KD32F"
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

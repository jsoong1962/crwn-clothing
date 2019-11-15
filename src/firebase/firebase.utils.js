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
  export const createUserProfileDocument = async (userAuth, additonalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exits) {
      const {displayName, email} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additonalData
        })
      }catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
      const {title, items} = docSnapshot.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: docSnapshot.id,
        title,
        items
      }
    });
  return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})
  }

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;

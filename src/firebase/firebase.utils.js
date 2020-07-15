import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOfdZaXL1KnsmYx6dvn2Rj6VItR34_oMM",
    authDomain: "crwn-db-12a0b.firebaseapp.com",
    databaseURL: "https://crwn-db-12a0b.firebaseio.com",
    projectId: "crwn-db-12a0b",
    storageBucket: "crwn-db-12a0b.appspot.com",
    messagingSenderId: "668416894503",
    appId: "1:668416894503:web:8c20cb3ffd1aaabd159002"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
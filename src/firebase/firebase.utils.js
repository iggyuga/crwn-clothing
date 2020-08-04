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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //const userRef = firestore.doc('users/123423asgkie');
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
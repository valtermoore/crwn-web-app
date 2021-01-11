import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAJgWYLkpXUshHEdK_pNNPgQpq49fOTP78",
    authDomain: "crown-db-de4da.firebaseapp.com",
    databaseURL: "https://crown-db-de4da.firebaseio.com",
    projectId: "crown-db-de4da",
    storageBucket: "crown-db-de4da.appspot.com",
    messagingSenderId: "361260354502",
    appId: "1:361260354502:web:840dcec0bdfb5eb3f140c7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); //reference the user by uid in the users path (collection)

    const snapShot = await userRef.get(); // gets the data from the user

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // se o user nao existir na snapShot/db vai criar novo user e fazer set na db
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }

    }

    return userRef;
    //console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
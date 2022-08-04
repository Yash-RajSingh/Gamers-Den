import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
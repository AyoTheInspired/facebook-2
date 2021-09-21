import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD3iBx150vX6_0wN2rkwEnSEOyEbTkMjdA",
	authDomain: "facebook-nextjs-244e9.firebaseapp.com",
	projectId: "facebook-nextjs-244e9",
	storageBucket: "facebook-nextjs-244e9.appspot.com",
	messagingSenderId: "658195237935",
	appId: "1:658195237935:web:70f6c85d4d73030e8c0ada",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
